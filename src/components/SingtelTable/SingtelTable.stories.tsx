import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../globalStyles';
import { SingtelTable } from './SingtelTable';
import { getDesignTokens } from '../../designTokens';
import { coldata1, rowdata1 } from './__tests__/tableTestData';

const meta: Meta<typeof SingtelTable> = {
  component: SingtelTable,
};

type Story = StoryObj<typeof SingtelTable>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: () => (
        <ThemeProvider theme={getDesignTokens()}>
            <GlobalStyle />
            <SingtelTable rows={rowdata1} cols={coldata1}></SingtelTable>
        </ThemeProvider>
    ),
};

export default meta;