import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createClient, KameleoonProvider } from '@kameleoon/react-sdk';

const configuration = {
  updateInterval: 60,
  domain: 'https://jazhka.github.io/experiment/',
};
const client = createClient({ siteCode: 'my_site_code', configuration });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  </StrictMode>
);
