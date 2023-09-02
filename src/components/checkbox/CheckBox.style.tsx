import styled from "styled-components";

interface CheckboxProps{
    selected?:boolean | undefined;
}

export const StyledCheckbox = styled.div<CheckboxProps>`
    display: flex;
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;

    @media only screen and (max-width: ${props => props.theme.breakPoint.sm}) {
        width: 2.4rem;
        height: 2.4rem;
    }
    

    border-radius: 0.8rem;
    align-items: center;
    justify-content: center;

    outline: ${(props) => (!props.selected ? '1px solid '+props.theme.color.black : '1px solid transparent')};
    background-color: ${(props) => (props.selected ? props.theme.color.P40 : 'inherit')};
`


