import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './sass/style.scss';
import { BrowserRouter,  } from "react-router-dom";
import { ScrollToTop } from './function/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <BrowserRouter> 

<ScrollToTop />
 <App />


 </BrowserRouter>
  </React.StrictMode>,
)
