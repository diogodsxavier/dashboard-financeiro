import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      <App />
    </div>
  </React.StrictMode>
)
