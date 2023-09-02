import React from 'react';

import { SingtelTable } from './components/SingtelTable/SingtelTable';
import { ThemeProvider } from 'styled-components';
import { getDesignTokens} from './designTokens';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <ThemeProvider theme={getDesignTokens()}>
      <GlobalStyle />
      <SingtelTable></SingtelTable>
    </ThemeProvider>
  );
}

export default App;
