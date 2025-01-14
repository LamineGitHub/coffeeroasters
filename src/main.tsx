import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TailwindIndicator } from "./components/TailwindIndicator.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TailwindIndicator />
  </StrictMode>,
)
