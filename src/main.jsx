import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import PatientLoginStore from './Contexts/PatientLoginStore.jsx'

createRoot(document.getElementById('root')).render(
  <PatientLoginStore>
    <App />
  </PatientLoginStore>
)