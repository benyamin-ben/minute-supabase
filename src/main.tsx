// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store1 from "./Redux/store.ts";


createRoot(document.getElementById('root')!).render(
  <Provider store={store1}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
