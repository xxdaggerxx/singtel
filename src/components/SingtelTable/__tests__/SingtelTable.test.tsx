import { act, getAllByRole, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getDesignTokens } from "../../../designTokens";
import { GlobalStyle } from "../../../globalStyles";
import { SingtelTable } from "../SingtelTable";
import 'jest-styled-components';
import { TableColumns, TableRows } from "../SingtelTable.types";
import userEvent from "@testing-library/user-event";

/// Set up Test data ////
const coldata1: TableColumns[] = [
    { propName: "operator", colTitle: "Operator" },
    { propName: "headset", colTitle: "Headset Display" },
    { propName: "avaliability", colTitle: "3G Availability", sort: true, }
]


interface Data1 {
    operator: string;
    headset: string;
    avaliability: string;
}
const rowdata1: TableRows<Data1>[] = [
    { key: '1', operator: '*Celcom Axiata (LTE)', headset: 'CELCOM / My Celcom / 502 19', avaliability: '3' },
    { key: '2', operator: '*DiGi Telecom (LTE)', headset: 'DiGi 1800 / DiGi /  MYMY18', avaliability: '1' },
    { key: '3', operator: '*Maxis (LTE)', headset: 'U Mobile / MYS 18 / MY 18', avaliability: '2' },
    { key: '4', operator: 'U Mobile (LTE)', headset: 'CELCOM / My Celcom / 502 19', avaliability: '4' },
];

describe('Table Tests', () => {

    afterEach(() => {
        //Cleanup work
        jest.clearAllMocks();
    })

    it('desktop table displays correctly', async () => {
        //Act
        const { getByTestId } = await render(<ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable  rows={rowdata1} cols={coldata1}></SingtelTable>
        </ThemeProvider>)

        ///Assert
        expect(getByTestId("SingtelTable")).toMatchSnapshot();
    })

    it('desktop compressed table displays correctly', async () => {
        //Act
        const { getByTestId } = await render(<ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable  rows={rowdata1} cols={coldata1}></SingtelTable>
        </ThemeProvider>)

        ///Assert
        expect(getByTestId("SingtelTable")).toMatchSnapshot();
    })

    it('mobile table displays correctly', async () => {

        //arrange
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 320, // Set your desired viewport width
        });


        //Act

        const { getByTestId } = await render(<ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable title={"My Contacts"} mobileCollapsed={true} rows={rowdata1} cols={coldata1}></SingtelTable>
        </ThemeProvider>)



        ///Assert
        expect(getByTestId("SingtelTable")).toMatchSnapshot();
    })

    it('table sorting works', async () => {


        //Act

        const { getByTestId, getByRole } = await render(<ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable rows={rowdata1} cols={coldata1}></SingtelTable>
        </ThemeProvider>)

        const sortBtn = getByRole("button");
        expect(sortBtn).toBeInTheDocument()

        await act(async () => {
            await userEvent.click(sortBtn)

        })


        ///Assert
        expect(getByTestId("SingtelTable")).toMatchSnapshot();
    })


    it('table checkbox select works', async () => {

        //arrange
        let onSelectMock = jest.fn();

        //Act
        const { getByRole, getAllByRole } = await render(
            <ThemeProvider theme={getDesignTokens()}>
                <GlobalStyle />
                <SingtelTable onSelect={onSelectMock} selectionType={'multi'} rows={rowdata1} cols={coldata1}></SingtelTable>
            </ThemeProvider>)

        const checkBtn = getAllByRole("checkbox");

        await act(async () => {
            await userEvent.click(checkBtn[0])

        })
        ///Assert
        expect(getByRole("check")).toBeInTheDocument();
        expect(onSelectMock).toBeCalled();
    })

    it('table radiobutton select works', async () => {

        //arrange
        let onSelectMock = jest.fn();

        //Act

        const { getByRole, getAllByRole } = await render(
            <ThemeProvider theme={getDesignTokens()}>
                <GlobalStyle />
                <SingtelTable onSelect={onSelectMock} selectionType={'single'} rows={rowdata1} cols={coldata1}></SingtelTable>
            </ThemeProvider>)

        const checkBtn = getAllByRole("radiogroup");

        await act(async () => {
            await userEvent.click(checkBtn[0])

        })


        ///Assert
        expect(getByRole("radioSelect")).toBeInTheDocument();
        expect(onSelectMock).toBeCalled();
    })

})