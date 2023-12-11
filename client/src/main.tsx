import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './GlobalStyle.ts'
import { GLobalProvider } from './context/Glodal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <GLobalProvider>
      <App />
    </GLobalProvider>
  </React.StrictMode>,
)
