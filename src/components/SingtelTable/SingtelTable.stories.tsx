import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../globalStyles';
import { SingtelTable } from './SingtelTable';
import { getDesignTokens } from '../../designTokens';
import { coldata1, rowdata1 } from './tableTestData';

const meta: Meta<typeof SingtelTable> = {
  component: SingtelTable,
  tags: ['autodocs']
};

type Story = StoryObj<typeof SingtelTable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        rows: rowdata1,
        cols: coldata1,
        style: {maxWidth:"800px"},
        title: "My Table"
      },
    render: (args) => (
        <ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable {...args}></SingtelTable>
        </ThemeProvider>
    ),
};


export const MobileCollapsed: Story = {
    args: {
        rows: rowdata1,
        cols: coldata1,
        mobileCollapsed: true,
        style: {maxWidth:"800px"},
        title: "My Table"
      },
    render: (args) => (
        <ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable {...args}></SingtelTable>
        </ThemeProvider>
    ),
};

export default meta;