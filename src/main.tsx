import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { routeTree } from './routeTree.gen';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import './global.css';

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} */
