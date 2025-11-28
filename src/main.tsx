import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { ThankYouSignals } from './pages/ThankYouSignals.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you-signals" element={<ThankYouSignals />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
