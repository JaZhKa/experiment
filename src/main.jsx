import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createClient, KameleoonProvider } from '@kameleoon/react-sdk';

const sdkParameters = {
  siteCode: 'my_site_code',
};
const client = createClient(sdkParameters);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  </StrictMode>
);
