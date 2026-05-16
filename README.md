# Platós de Cine 🎬🍿

**Comidas icónicas de películas, series y videojuegos.**

Una PWA para iPhone con 30 recetas recreadas de las escenas gastronómicas más memorables de la cultura pop. Desde el Big Kahuna Burger de Pulp Fiction hasta el pollo frito de Los Pollos Hermanos de Breaking Bad.

Cada receta incluye:
- 🛒 **Lista de ingredientes** con modo compra (checklist)
- 🔥 **Preparación** paso a paso con tiempos y consejos
- 🎬 **La Escena**: descripción cinematográfica del momento exacto en que aparece la comida, los personajes y por qué se volvió icónico

### Algunas recetas incluidas

| Receta | Película/Serie | Año |
|---|---|---|
| Big Kahuna Burger | Pulp Fiction | 1994 |
| Cerveza de Mantequilla | Harry Potter | 2001 |
| Cannoli Sicilianos | El Padrino | 1972 |
| Pollo Los Pollos Hermanos | Breaking Bad | 2008 |
| Tarta de Cereza + Café | Twin Peaks | 1990 |
| Pan de Lembas | El Señor de los Anillos | 2001 |
| Pasteles de Limón de Sansa | Juego de Tronos | 2011 |
| Galletas de Ted Lasso | Ted Lasso | 2020 |
| Cangreburger | Bob Esponja | 1999 |
| Ramen de Ponyo | Studio Ghibli | 2008 |

## URL

🔗 **[tecladooscuro.github.io/cinema-recipes](https://tecladooscuro.github.io/cinema-recipes/)**

## Tech Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4 (tema rojo neón)
- Dexie.js (IndexedDB para lista de compra)
- PWA (vite-plugin-pwa, modo standalone)
- HashRouter (compatible con GitHub Pages)

## Instalación

```bash
npm install
npm run dev     # desarrollo
npm run build   # producción
```

## Uso en iPhone

Abre la URL en Safari, pulsa **Compartir → Añadir a pantalla de inicio**.
La app se instala como una app nativa (sin barra de navegación, pantalla completa).
