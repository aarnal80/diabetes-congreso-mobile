'use strict';
const main=document.querySelector('main');
const moduleIcons={
 dm2:'<path d="M12 3c-2 3-7 7-7 12a7 7 0 0 0 14 0c0-5-5-9-7-12Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
 ic:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M4 12h4l2-3 3 6 2-3h5"/>',
 erc:'<path d="M9 3C3 3 1 9 3 15c1 4 5 6 8 3 2-2 1-4-1-5s-3-3-1-5c2-2 2-5 0-5Zm6 0c6 0 8 6 6 12-1 4-5 6-8 3-2-2-1-4 1-5s3-3 1-5c-2-2-2-5 0-5Z"/>',
 obesidad:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 8a7 7 0 0 1 10 0l-2 5H9L7 8Zm5 3 2-4"/>',
 hepatico:'<path d="M3 9c3-5 9-5 17-3 2 1 2 4 0 6l-7 6c-2 2-4 2-5-1l-2-1c-4 1-5-3-3-7Z"/><path d="m14 6-2 7 6-2"/>',
 insulina:'<path d="m16 3 5 5M17 7l-3-3M6 14l4 4M5 19l-2 2M6 14l8-8 4 4-8 8H6v-4Zm5-5 2 2m-5 1 2 2"/>'
};
document.querySelectorAll('#nav .symbol').forEach(icon=>{icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+moduleIcons[icon.parentElement.dataset.key]+'</svg>';});
document.getElementById('nav').insertAdjacentHTML('beforebegin','<div class="module-heading"><h1>¿Qué quieres consultar?</h1></div>');
main.insertAdjacentHTML('afterbegin','<div class="flow-bar"><button id="flowBack" type="button">← Módulos</button><span id="flowStep"></span></div>');
document.querySelector('.result-area').insertAdjacentHTML('beforeend','<div class="result-actions"><button id="resultAdvanced" type="button" class="outline">Revisión detallada</button><button id="resultSource" type="button" class="outline">Algoritmo PDF ↗</button></div>');
const submit=document.querySelector('#form > .primary');submit.textContent='Ver resultado';
function flowScreen(screen,focus=true){
 document.body.dataset.screen=screen;
 document.querySelectorAll('#nav .nav-item').forEach(button=>{const selected=screen!=='home'&&button.dataset.key===current;button.classList.toggle('active',selected);if(selected)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
 $('flowBack').textContent=screen==='result'?'← Cambiar opciones':'← Módulos';
 $('flowStep').textContent=screen==='result'?'Resultado':'Opciones';
 $('resultAdvanced').hidden=current==='hepatico';
 window.scrollTo({top:0,behavior:'instant'});
 if(focus){const target=screen==='home'?document.querySelector('.module-heading h1'):screen==='result'?$('title'):$('fields').querySelector('select,input');if(target?.matches('h1,h2'))target.setAttribute('tabindex','-1');target?.focus({preventScroll:true});}
}
function showFlowResult(){
 try{
  if(current==='dm2'){quickAdvice($('priority').value,$('control').value);updateQuick();}
  else{updateModuleQuick();readData($('form'),quickConfigs[current]);}
  if(!$('results').querySelector('.quick-guidance'))return;
  $('errors').textContent='';flowScreen('result');
 }catch(e){$('errors').textContent=e.message;}
}
$('nav').addEventListener('click',e=>{if(e.target.closest('[data-key]'))flowScreen('options');});
$('form').onsubmit=e=>{e.preventDefault();showFlowResult();};
$('form').addEventListener('change',()=>{if(!$('fields').querySelector('input[type=number]')&&[...$('fields').querySelectorAll('select')].every(s=>s.value))showFlowResult();});
$('flowBack').onclick=()=>flowScreen(document.body.dataset.screen==='result'?'options':'home');
$('reset').textContent='Inicio';$('reset').onclick=()=>flowScreen('home');
$('consultTab').onclick=()=>flowScreen('home');
document.querySelector('.brand').onclick=e=>{e.preventDefault();flowScreen('home');};
$('resultAdvanced').onclick=()=>openAdvanced();$('resultSource').onclick=()=>openPdf(current);
flowScreen('home',false);
