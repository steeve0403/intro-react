import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './assets/App'
import DarkMode from './assets/darkMode'
//import Title from './assets/title'
//import Title from './assets/title'

//import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkMode/>

    <App />
    
  </React.StrictMode>,
)
