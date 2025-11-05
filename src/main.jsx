//main.jsx - Punto de entrada principal de la aplicación React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// 🎨 Orden lógico de estilos
import './styles/variables.css'      // 1. Variables globales
import './index.css'                 // 2. Reset global
import './styles/util.css'           // 3. Utilidades
import './styles/IntegrantesBase.css'// 4. Bases componentes
import './styles/themes.css'         // 5. Temas
import './App.css'                   // 6. App principal


// Renderizar la aplicación con React Router para SPA
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)


