'use strict';
// Names explain classes mentioned in the result; they do not add treatment options.
function drugLegend(text){
 const entries=[
  [/iSGLT-?2/i,'iSGLT2','Inhibidores del cotransportador sodio-glucosa 2','Dapagliflozina, empagliflozina, canagliflozina, ertugliflozina.'],
  [/arGLP-?1/i,'arGLP-1','Agonistas del receptor GLP-1','Semaglutida, liraglutida, dulaglutida.'],
  [/GIP-?GLP-?1|agonista dual|tirzepatida/i,'Agonista dual GIP/GLP-1','Agonista de los receptores GIP y GLP-1','Tirzepatida.'],
  [/iDPP-?4/i,'iDPP4','Inhibidores de la dipeptidil peptidasa 4','Sitagliptina, linagliptina, saxagliptina, alogliptina. Saxagliptina debe evitarse en insuficiencia cardíaca.'],
  [/sulfonilurea|\bSU\b/i,'SU','Sulfonilureas','Gliclazida, glimepirida.'],
  [/metformina/i,'Metformina','Biguanida','Metformina.'],
  [/pioglitazona/i,'Pioglitazona','Tiazolidinediona','Pioglitazona. Evitar en insuficiencia cardíaca.'],
  [/repaglinida/i,'Repaglinida','Glinida','Repaglinida.'],
  [/insulina|insulinización|\bbasal\b/i,'Insulina basal','Ejemplos de insulinas basales','Glargina, degludec, NPH. La pauta depende de la valoración individual.'],
  [/\bIECA\b/i,'IECA','Inhibidores de la enzima convertidora de angiotensina','Enalapril, ramipril.'],
  [/ARA\s?II/i,'ARA II','Antagonistas del receptor de angiotensina II','Losartán, valsartán.'],
  [/INRA|ARNI/i,'INRA / ARNI','Inhibidor de neprilisina y del receptor de angiotensina','Sacubitrilo/valsartán.'],
  [/\bARM\b|finerenona/i,'ARM','Antagonistas del receptor mineralocorticoide','Espironolactona, eplerenona; finerenona (no esteroideo). Indicaciones diferentes según contexto.'],
  [/betabloqueante/i,'Betabloqueantes','Ejemplos utilizados en insuficiencia cardíaca','Bisoprolol, carvedilol, metoprolol succinato.']
 ];
 const rows=entries.filter(([pattern])=>pattern.test(text));
 if(!rows.length)return '';
 return `<section class="drug-legend" aria-label="Leyenda de fármacos"><h3>¿Qué fármacos son?</h3><p class="legend-intro">Guía de las clases mencionadas arriba.</p><dl>${rows.map(([,name,definition,examples])=>`<div><dt>${name}<small>${definition}</small></dt><dd>${examples}</dd></div>`).join('')}</dl><p class="legend-note">Ejemplos de principios activos, no una lista para prescribir o combinar. Los fármacos de una misma clase no comparten necesariamente indicaciones ni beneficios cardiovasculares o renales. Comprobar ficha técnica.</p><a class="ref" href="https://redgdps.org/abordaje-integral-del-paciente-con-dm2/tratamiento-de-las-personas-con-dm2-20210921/" target="_blank" rel="noopener">Referencia de familias farmacológicas · redGDPS ↗</a></section>`;
}
