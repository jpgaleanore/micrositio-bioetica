# Micrositio bioético: IA en el diagnóstico médico

Micrositio web del proyecto integrador del curso de Ética y Axiología (fase 2), construido con [Astro](https://astro.build).
Autor: Juan Pablo Galeano Restrepo · Universidad Católica Luis Amigó.

Sitio publicado: https://jpgaleanore.github.io/micrositio-bioetica/

## Estructura del proyecto

```
├── astro.config.mjs          # Configuración de Astro (site y base para GitHub Pages)
├── public/
│   ├── favicon.svg
│   └── media/                # Coloca aquí el podcast (podcast.mp3)
├── src/
│   ├── data/site.ts          # TODOS los datos editables (integrante, entrevista, video, podcast, referencias)
│   ├── layouts/BaseLayout.astro
│   ├── components/           # Un componente por sección
│   │   ├── Header.astro / ThemeToggle.astro / Footer.astro
│   │   ├── Hero.astro            (portada)
│   │   ├── Presentacion.astro    (sección 1)
│   │   ├── Analisis.astro        (sección 2)
│   │   ├── Entrevista.astro      (sección 3)
│   │   ├── Deliberacion.astro    (sección 4) + PrinciplesDiagram.astro
│   │   ├── Conclusiones.astro    (sección 5)
│   │   └── Referencias.astro     (sección 6)
│   ├── pages/index.astro     # Página única que ensambla las secciones
│   ├── scripts/main.ts       # Tema claro/oscuro, menú móvil, pestañas, progreso, animaciones
│   ├── styles/global.css
│   └── lib/paths.ts          # Ayuda para rutas con el prefijo base
└── .github/workflows/deploy.yml   # Despliegue automático a GitHub Pages
```

## Qué debes editar antes de entregar

Casi todo está en `src/data/site.ts`:

1. **`entrevista`**: nombre, cargo, presentación y justificación del entrevistado; `youtubeId` (lo que va después de `v=` en la URL del video); datos para la referencia APA; los seis `aportes`. Ajusta `preguntas` si cambiaste la batería del foro.
2. **`podcast`**: sube tu audio como `public/media/podcast.mp3` o pon un enlace externo en `archivo`.
3. **`site`**: integrantes, programa y universidad (ya diligenciados).

Los textos largos de cada sección viven en su componente dentro de `src/components/`.

## Comandos

| Comando           | Acción                                              |
|-------------------|-----------------------------------------------------|
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321/micrositio-bioetica/` |
| `npm run build`   | Genera el sitio estático en `dist/`                 |
| `npm run preview` | Sirve `dist/` localmente para revisarlo             |

## Cómo publicar cambios

```bash
git add .
git commit -m "Actualizar contenido"
git push
```

El flujo de GitHub Actions construye el sitio con Astro y lo despliega en GitHub Pages en uno o dos minutos.
