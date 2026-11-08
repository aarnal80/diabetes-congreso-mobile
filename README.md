# GlucoGuía · Edición Congreso redGDPS

Aplicación de **Dr. Antonio Arnal**, creada exclusivamente para el Congreso de la redGDPS 2026. Versión móvil independiente de la webapp de la diapositiva 28 de su presentación sobre diabetes e inteligencia artificial.

## Uso

Seis módulos: DM2, insuficiencia cardíaca, enfermedad renal crónica, obesidad, enfermedad hepática metabólica e insulinización. Navegación táctil, fuentes PDF, revisión detallada, ajustes de lectura y sección Acerca de. Las instrucciones para añadirla a la pantalla de inicio de iPhone y Android están en **Ajustes**.

La app prepara sus archivos para uso sin conexión después de la primera carga. Cada PDF se guarda después de abrirlo con conexión. El navegador puede limpiar esa caché. Las nuevas versiones se descargan al recuperar conexión; cerrar las ventanas de la app y abrirla de nuevo permite activar un nuevo service worker.

## Desarrollo

Web estática sin dependencias de ejecución ni servicios de IA. Servir este directorio con `python -m http.server 8000` y abrir localhost:8000. La instalación requiere HTTPS o localhost.

`app.js` mantiene los criterios clínicos de la presentación y el umbral de HbA1c de 8,5 % del algoritmo redGDPS 2026. La versión 1.2 organiza la consulta en tres vistas: módulos, opciones y resultado. En formularios de selección se avanza al completar los criterios; los formularios numéricos usan «Ver resultado». Volver conserva los valores. La leyenda contextual de principios activos (`drug-legend.js`) se muestra compacta, también en la revisión detallada. Paleta magenta y azul inspirada en los materiales redGDPS; autoría dentro de Acerca de. Cambiar la versión de caché de `sw.js` con cada publicación.

## Alcance y privacidad

Recurso docente para profesionales sanitarios, pendiente de validación clínica formal. No sustituye el juicio clínico ni la revisión de fichas técnicas. Las comprobaciones de interfaz no constituyen una validación clínica. No se guardan consultas ni se transmiten datos clínicos. Solo se almacena la preferencia de lectura y la caché de recursos; el alojamiento puede conservar registros técnicos de acceso.

Aplicación independiente, sin afiliación ni aval oficial de redGDPS. Los algoritmos PDF conservan la autoría de sus respectivos titulares y se incluyen como fuentes de referencia. No se atribuye a Antonio Arnal la autoría de esos documentos. No se concede una licencia adicional sobre materiales de terceros.

© 2026 Antonio Arnal. Todos los derechos reservados sobre la adaptación propia.

## Versión 1.6

Retirado cintura/altura. Autor: Antonio Arnal, Médico de Familia y Medicina de Urgencias. Coautor: Francisco M. Adán Gil, Médico de Familia, Coordinador de redGDPS en Aragón.

Clasificación ESC 2026: reducida <50%, preservada ≥50%. La revisión detallada distingue la evidencia terapéutica del PDF redGDPS 2024. Fuente: https://www.escardio.org/news/news-room/congress-news/2026-esc-guidelines-for-the-management-of-heart-failure/
