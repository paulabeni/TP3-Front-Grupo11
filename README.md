# TechVerse - Grupo 11 - TP2 React

[![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?logo=vite)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-orange?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://tp-2-front-grupo11-rho.vercel.app/)

## 🌐 Links del Proyecto

- **🚀 Deploy en Vercel:** [https://tp-2-front-grupo11-rho.vercel.app/](https://tp-2-front-grupo11-rho.vercel.app/)
- **📂 Repositorio GitHub:** [[https://github.com/micakn/TP2-Front-Grupo11.](https://github.com/micakn/TP2-Front-Grupo11.)]

---

## 📋 Descripción

**TechVerse** es una **Single Page Application (SPA)** desarrollada en React que presenta a nuestro equipo de desarrollo. Este proyecto representa la **migración completa del TP1** (sitio web estático HTML/CSS/JS) a una arquitectura moderna de React, implementando componentes reutilizables, routing dinámico y consumo de APIs.

### 🎯 Objetivo Principal

Transformar el sitio web estático del TP1 en una SPA moderna utilizando React, mejorando la modularidad, escalabilidad y experiencia de usuario mediante:
- Componentización efectiva
- Gestión de estado con hooks
- Integración de datos dinámicos (JSON local + API pública)
- Diseño responsive avanzado

---

## 🚀 Características Principales

### ✨ Funcionalidades Implementadas

| Característica | Descripción |
|----------------|-------------|
| **🛣️ SPA con React Router** | Navegación fluida sin recarga de páginas entre secciones |
| **📱 Sidebar Responsive** | Menú lateral fijo con modo hamburguesa en móviles |
| **🎨 Portales Individuales** | Cada integrante con diseño único y datos dinámicos |
| **🌐 APIs Integradas** | Películas desde JSON local (20+) y música desde Deezer API |
| **📐 Diseño Responsive** | Optimizado para desktop, tablet y móvil |
| **⚡ Loading States** | Indicadores de carga mientras se obtienen datos |
| **🎯 Componentización** | Arquitectura modular con componentes reutilizables |
| **📊 Diagramas Técnicos** | Visualización de la arquitectura del proyecto |

---

## 👥 Equipo - Grupo 11

### Integrantes Activos

| Nombre | Edad | Ubicación | Rol | Especialidades |
|--------|------|-----------|-----|----------------|
| **Paula** | 32 años | Berazategui, Buenos Aires | Full Stack Developer | HTML, CSS, PHP, JavaScript |
| **Micaela** | 31 años | Buenos Aires, Argentina | Frontend Developer & Design Enthusiast | Impresión 3D, Diseño Creativo, Programación |
| **María** | 44 años | Córdoba, Argentina | Creative Designer & Project Manager | Organización, Trabajo en equipo, Comunicación |

---

## 🛠️ Stack Tecnológico

### Frontend Core
- **⚛️ React 18** - Librería principal con hooks modernos
- **🚀 Vite** - Build tool rápido y dev server optimizado
- **🛣️ React Router DOM 6** - Navegación SPA declarativa
- **🎨 CSS3 Puro** - Estilos modernos sin frameworks (CSS Variables, Flexbox, Grid)

### Gestión de Datos
- 📦 Fetch API - Consumo asíncrono de datos
- 🔄 React Hooks - `useState`, `useEffect` para manejo de estado
- 🎵 React Context API - Estado global para reproductor de música
- 📁 JSON Local - 20+ películas almacenadas localmente
- 🎶 Deezer API - Top chart global en tiempo real
- 🎧 iTunes Search API - Búsqueda y previews de música sin autenticación

### Deploy & DevOps
- **☁️ Vercel** - Hosting y CI/CD automático
- **🔧 Serverless Functions** - Proxy API para Deezer (`/api/deezer.js`)
- **📱 Progressive Enhancement** - Mejora progresiva para todos los dispositivos

---

## 📁 Estructura del Proyecto

```
tp2-front-grupo11/
├── 📁 api/
│   └── deezer.js              # Proxy serverless para Deezer API
│
├── 📁 public/
│   └── 📁 img/                # Imágenes, avatares, logos, diagramas
│
├── 📁 src/
│   ├── 📁 components/         # Componentes reutilizables
│   │   ├── 📁 cards/
│   │   │   ├── MusicaCard.jsx
│   │   │   └── PeliculaCard.jsx
│   │   ├── 📁 ui/
│   │   │   ├── CardGrid.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── ui.css
│   │   ├── PortalBase.jsx     # Componente base para portales
│   │   ├── SeccionIntegrante.jsx
│   │   ├── Sidebar.jsx
│   │   └── TimelineItem.jsx
│   │
│   ├── 📁 data/
│   │   └── peliculas.json     # 20 películas con datos completos
│   │
│   ├── 📁 pages/              # Páginas principales
│   │   ├── 📁 portales/
│   │   │   ├── Maria.jsx
│   │   │   ├── Micaela.jsx
│   │   │   └── Paula.jsx
│   │   ├── Bitacora.jsx
│   │   ├── Diagramas.jsx
│   │   ├── Home.jsx
│   │   ├── Integrantes.jsx
│   │   ├── Musica.jsx
│   │   └── Peliculas.jsx
│   │
│   ├── 📁 styles/             # Estilos globales y temas
│   │   ├── IntegrantesBase.css
│   │   ├── MediaPages.css
│   │   ├── themes.css
│   │   ├── util.css
│   │   └── variables.css
│   │
│   ├── 📁 utils/
│   │   └── getDeezerArtists.js
│   │
│   ├── App.jsx                # Componente raíz + routing
│   ├── App.css
│   ├── index.css
│   └── main.jsx               # Punto de entrada
│
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vercel.json                # Configuración para deploy
└── vite.config.js
```

---

## 🚦 Instalación y Uso

### Prerrequisitos
- **Node.js** 18+ 
- **npm** 9+ o **yarn** 1.22+

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd tp2-front-grupo11
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

---

## 📊 Secciones de la Aplicación

### 🏠 **Home**
- Página principal con introducción al proyecto
- Estadísticas actualizadas (3 integrantes, 20+ películas, 2 APIs, reproductor global)
- Stack tecnológico con íconos animados
- Características destacadas incluyendo reproductor de música
- CTAs hacia Bitácora y Diagramas

### 📋 **Bitácora**
- Timeline interactivo del desarrollo del proyecto
- Eventos cronológicos desde el TP1 hasta el TP2
- Decisiones técnicas tomadas
- Cambios y mejoras implementadas

### 👥 **Integrantes**
- Presentación del equipo activo
- Tarjetas interactivas con información de cada integrante
- Enlaces directos a portales individuales

### 📊 **Diagramas**
- **Árbol de Renderizado**: Jerarquía completa de componentes
- **Estructura de Carpetas**: Organización del proyecto
- Arquitectura React SPA explicada
- Flujo de navegación
- Stack tecnológico detallado
- Comparación TP1 vs TP2

### 🎬 **Películas**
- Catálogo de 20+ películas desde JSON local
- Información detallada: año, género, director, rating, duración
- Enlaces a IMDb
- Tarjetas responsive con hover effects

### 🎵 **Música (Deezer API)**
- Top 10 canciones globales desde Deezer API
- Datos en tiempo real del chart mundial
- Imágenes de álbumes en alta calidad
- Enlaces directos a Deezer

### 🎧 **Reproductor (iTunes API)** ⭐ NUEVO
- Búsqueda libre de canciones y artistas
- Previews reproducibles de 30 segundos reales
- Player flotante global persistente en toda la app
- Controles completos (play/pause/stop)
- Barra de progreso interactiva
- Carátulas de álbumes giratorias durante reproducción

### 🌟 **Portales Individuales**

#### **💜 Micaela**
- Diseño violeta/fucsia con dorado
- Avatar interactivo con efecto hover
- **Películas**: Twister, Volver al Futuro, Mulan
- **Música**: BTS, Miranda!, 5 Seconds of Summer

#### **💙 Paula**
- Tema tech futurista azul
- Grid de intereses animados
- **Películas**: Fragmentado, Harry Potter, Interstellar, Inquebrantable
- **Música**: Soda Stereo, No te va a gustar, Carlos Rivera, Airbag

#### **✨ María**
- Estilo retro 80s con efectos vintage
- **Películas**: El viaje de Chihiro, Mi vecino Totoro, El castillo ambulante
- **Música**: Hoobastank, Audioslave, Keane

---

## 🔧 Características Técnicas Avanzadas

### 🎨 Diseño y UX
- **Mobile-First Approach**: Diseño prioritario para móviles
- **CSS Variables**: Temas personalizados por integrante
- **Animaciones CSS**: FadeIn, hover effects, transitions suaves
- **Breakpoints**: Optimizados para 480px, 768px, 1024px
- **Sidebar Colapsable**: Modo hamburguesa en móviles con overlay

### ⚡ Performance
- **Code Splitting**: Carga optimizada con Vite
- **Lazy Loading**: Imágenes con loading="lazy"
- **Optimización de Assets**: Imágenes en formato WebP
- **Build Optimizado**: Minificación y tree-shaking automático

### 🔌 Integración de APIs
- **Fetch Asíncrono**: Con `useEffect` y `useState`
- **Loading States**: Indicadores de carga en todas las páginas
- **Error Handling**: Manejo de errores de red con fallbacks
- **Proxy Serverless**: `/api/deezer.js` para evitar CORS en Deezer
- **iTunes Direct Fetch**: API pública sin autenticación ni proxy necesario
- **Búsqueda en Tiempo Real**: Debounce y optimización de requests

### 🎧 Sistema de Audio Global
- **React Context API**: Estado compartido para reproducción en toda la app
- **Audio Web API**: Reproducción nativa sin dependencias externas
- **Player Flotante**: Componente persistente con z-index optimizado para móviles
- **Controles Completos**: Play, pause, stop, seek en la barra de progreso
- **Animaciones**: Carátula giratoria durante reproducción

### ♿ Accesibilidad
- **Semantic HTML**: Uso correcto de etiquetas
- **ARIA Labels**: En elementos interactivos
- **Navegación por teclado**: Soporte completo
- **Contraste de colores**: AA WCAG compliance

---

## 🎯 Mejoras TP1 → TP2

| TP1 (HTML/CSS/JS Estático) | TP2 (React SPA) |
|-----------------------------|-----------------|
| ❌ 5 archivos HTML separados | ✅ Single Page Application |
| ❌ Recarga completa al navegar | ✅ Navegación instantánea sin recargas |
| ❌ Código duplicado entre páginas | ✅ Componentes reutilizables (DRY) |
| ❌ JavaScript vanilla disperso | ✅ React con hooks modernos |
| ❌ Datos estáticos hardcodeados | ✅ APIs dinámicas (JSON + Deezer) |
| ❌ Sin manejo de estados | ✅ useState + useEffect |
| ❌ CSS repetitivo por página | ✅ CSS modular + variables globales |
| ❌ Responsive básico | ✅ Mobile-first con 3 breakpoints |
| ❌ Sin arquitectura definida | ✅ Arquitectura escalable por capas |

## 🌐 Deploy en Vercel

### Configuración Automática
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework Preset**: Vite
- **Node Version**: 18.x

### Archivos de Configuración

**`vercel.json`**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "functions": {
    "api/deezer.js": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

---

## 🐛 Troubleshooting

### Problemas Comunes

**❌ Error de CORS con Deezer API**
```bash
✅ Solución: Usar el proxy serverless en /api/deezer.js
```

**❌ Sidebar no se cierra en móvil**
```bash
✅ Verificar que el overlay tenga el event listener correcto
```

**❌ Imágenes no cargan**
```bash
✅ Verificar que las rutas sean relativas a /public
✅ Usar /img/nombre.webp (sin "public" en la ruta)
```

---

## 📞 Contacto y Colaboradores

**Grupo 11 - Desarrollo Web Full Stack**

- **Paula** - Full Stack Developer
- **Micaela** - Frontend Developer & Design Enthusiast
- **María** - Creative Designer & Project Manager

---

## 📄 Licencia

Este proyecto fue desarrollado como parte del Trabajo Práctico 2 de la materia Desarrollo Web Full Stack - 2025.

---

**Desarrollado con ❤️ por el Grupo 11**  
*Trabajo Práctico 2 - React SPA con APIs - Octubre 2025*