
import React from "react"
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MainStore from './stores/main_store'
import { Provider } from "react-redux"
import './locale/i18n.ts'; // Importar la configuración de i18next


const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={MainStore}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
