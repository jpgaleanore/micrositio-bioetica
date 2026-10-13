# Micrositio bioético: IA en el diagnóstico médico

Micrositio web estático del proyecto integrador del curso de Bioética (fase 2).
Dilema: **inteligencia artificial en el diagnóstico médico**.

Sitio publicado: https://jpgaleanore.github.io/micrositio-bioetica/

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Todo el contenido (portada y 6 secciones) |
| `styles.css` | Estilos y diseño responsivo |
| `script.js` | Menú móvil, pestañas, barra de progreso, animaciones |
| `media/` | Carpeta para el audio del podcast |

## Qué debes editar antes de entregar

Busca en `index.html` los comentarios `<!-- EDITAR -->` y los textos entre corchetes `[...]`:

1. **Portada:** nombres de los integrantes, programa académico y universidad.
2. **Sección 3 (entrevista):**
   - Nombre, profesión y presentación del entrevistado.
   - Justificación específica de su elección.
   - Reemplaza `VIDEO_ID` por el ID de tu video de YouTube (dos lugares: el `iframe` y la referencia APA).
   - Los seis "aportes" de la entrevista.
   - Ajusta las preguntas si cambiaste la batería del foro.
3. **Sección 4 (deliberación):** sube tu podcast como `media/podcast.mp3` o reemplaza el reproductor por el código de inserción de Spotify/YouTube.
4. **Sección 6 (referencias):** completa la referencia APA de la entrevista.
5. **Pie de página:** programa y universidad.

## Cómo publicar cambios

```bash
git add .
git commit -m "Actualizar contenido"
git push
```

GitHub Pages redespliega el sitio automáticamente en uno o dos minutos.

## Ver el sitio en local

Abre `index.html` directamente en el navegador, o ejecuta:

```bash
python3 -m http.server 8080
```

y visita http://localhost:8080.
