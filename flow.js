'use strict';
const main=document.querySelector('main');
document.getElementById('nav').insertAdjacentHTML('beforebegin','<div class="module-heading"><h1>¿Qué quieres consultar?</h1></div>');
main.insertAdjacentHTML('afterbegin','<div class="flow-bar"><button id="flowBack" type="button">← Módulos</button><span id="flowStep"></span></div>');
document.querySelector('.result-area').insertAdjacentHTML('beforeend','<div class="result-actions"><button id="resultAdvanced" type="button" class="outline">Revisión detallada</button><button id="resultSource" type="button" class="outline">Algoritmo PDF ↗</button></div>');
const submit=document.querySelector('#form > .primary');submit.textContent='Ver resultado';
function flowScreen(screen,focus=true){
 document.body.dataset.screen=screen;
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
