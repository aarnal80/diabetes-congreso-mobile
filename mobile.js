'use strict';
const shortNames={dm2:'Diabetes tipo 2',ic:'Insuf. cardíaca',erc:'Salud renal',obesidad:'Peso y obesidad',hepatico:'Salud hepática',insulina:'Insulina'};
document.querySelectorAll('#nav button').forEach(b=>{b.lastChild.textContent=shortNames[b.dataset.key];b.setAttribute('aria-label',modules[b.dataset.key].title);});
const openSettings=()=>document.getElementById('settings').showModal();
document.getElementById('settingsBtn').onclick=openSettings;
document.getElementById('aboutBtn').onclick=()=>document.getElementById('about').showModal();
document.getElementById('libraryTab').onclick=()=>document.getElementById('library').showModal();
document.getElementById('consultTab').onclick=()=>{document.getElementById('nav').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});document.querySelector('#nav .active').focus({preventScroll:true});};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('dialog').close());
const largeText=document.getElementById('largeText');
try{largeText.checked=localStorage.getItem('diabetes-large-text')==='true';}catch{}
document.body.classList.toggle('large-text',largeText.checked);
largeText.onchange=()=>{document.body.classList.toggle('large-text',largeText.checked);try{localStorage.setItem('diabetes-large-text',String(largeText.checked));}catch{}};
let installPrompt;
const installButton=document.getElementById('installApp');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;installButton.hidden=false;});
installButton.onclick=async()=>{if(!installPrompt)return;await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true;};
window.addEventListener('appinstalled',()=>{installButton.hidden=true;document.getElementById('installStatus').textContent='Aplicación instalada en este dispositivo.';});
if(matchMedia('(display-mode: standalone)').matches||navigator.standalone)document.getElementById('installStatus').textContent='Estás usando la versión instalada.';
if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).then(()=>{document.getElementById('offlineStatus').textContent='App preparada para consultas sin conexión. Los PDF necesitan conexión la primera vez que los abres.';}).catch(()=>{document.getElementById('offlineStatus').textContent='Modo sin conexión no disponible en este navegador.';});}
