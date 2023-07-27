import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Estudos from './Estudos';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Estudos />
  </StrictMode>
);
