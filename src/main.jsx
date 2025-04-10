import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createClient, KameleoonProvider } from '@kameleoon/react-sdk';

const configuration = {
  updateInterval: 60,
  domain: 'jazhka.github.io/experiment/',
};
const client = createClient({ siteCode: 'hlgwdjnk2q', configuration });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  </StrictMode>
);
