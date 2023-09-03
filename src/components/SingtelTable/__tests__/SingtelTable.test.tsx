import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getDesignTokens } from "../../../designTokens";
import { GlobalStyle } from "../../../globalStyles";
import { SingtelTable } from "../SingtelTable";
import { coldata1, rowdata1 } from "./tableTestData";



describe('Table Tests', () => {

    afterEach(() => {
        //Cleanup work
        jest.clearAllMocks();
    })

    it('desktop table displays correctly', async () => {
        //Act
        const { getByTestId } = await render(<ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable width="800px" rows={rowdata1} cols={coldata1}></SingtelTable>
        </ThemeProvider>)

        ///Assert
        expect(getByTestId("SingtelTable")).toMatchSnapshot();
    })

})