import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import PageContext from './utils/PageContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PageContext>
        <App />
      </PageContext>
    </BrowserRouter>
  </StrictMode>,
);
