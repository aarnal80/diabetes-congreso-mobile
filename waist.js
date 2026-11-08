'use strict';
function waistAssessment(waist,height){
 if(waist==null&&height==null)return null;
 if(waist==null||height==null)throw Error('Para calcular cintura/altura, completa ambas medidas en cm o deja las dos vacías.');
 if(!Number.isFinite(waist)||!Number.isFinite(height)||waist<30||waist>300||height<100||height>250)throw Error('Revisa cintura (30–300 cm) y altura (100–250 cm).');
 return {ratio:waist/height,abdominal:waist>=height*0.5};
}
function waistCard(data){
 const assessment=waistAssessment(data.qWaist??data.waist??null,data.qHeight??data.height??null);
 if(!assessment)return '';
 const ratio=assessment.ratio.toLocaleString('es-ES',{maximumFractionDigits:4});
 return `<section class="waist-result"><h3>Índice cintura/altura <strong>≈ ${ratio}</strong></h3><p>${assessment.abdominal?'≥0,5: indicador de obesidad abdominal. Completar la valoración del riesgo cardiometabólico junto con el IMC y las comorbilidades.':'<0,5: por debajo del umbral de obesidad abdominal de este índice. No excluye obesidad por IMC ni otros riesgos.'}</p><a class="ref" href="https://www.diabetespractica.com/files/129/art3.pdf#page=2" target="_blank" rel="noopener">Fundamento del algoritmo redGDPS · p. 50 ↗</a></section>`;
}
