import React from 'react';

import { SingtelTable } from './components/SingtelTable/SingtelTable';
import { ThemeProvider } from 'styled-components';
import { getDesignTokens} from './designTokens';
import { GlobalStyle } from './globalStyles';
import { Data1, coldata1, rowdata1 } from './components/SingtelTable/tableTestData';

function App() {
  return (
    <ThemeProvider theme={getDesignTokens()}>
      <GlobalStyle />
      <SingtelTable<Data1> title={"My Contacts"} mobileCollapsed={true} selectionType={'multi'} rows={rowdata1}  cols={coldata1}></SingtelTable>
    </ThemeProvider>
  );
}

export default App;
