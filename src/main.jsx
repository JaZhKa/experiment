import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  Environment,
  KameleoonClient,
  KameleoonProvider,
} from '@kameleoon/react-sdk';

const configuration = {
  updateInterval: 60,
  environment: Environment.Production,
  cookieDomain: 'jazhka.github.io'
};

const client = new KameleoonClient({ siteCode: 'wgkn3v9n27', configuration });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  </StrictMode>
);
