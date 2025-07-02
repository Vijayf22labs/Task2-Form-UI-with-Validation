import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster position="top-left" reverseOrder={false} toastOptions={{style: {backgroundColor: "black", color: "white", paddingRight: "20px", paddingLeft: "20px"}, duration: 1500}} />
  </>,
)
