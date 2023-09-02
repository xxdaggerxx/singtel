import styled from "styled-components";

interface CheckboxProps{
    selected?:boolean | undefined;
}

export const StyledRadiobox = styled.div<CheckboxProps>`
    display: flex;
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;
    @media only screen and (max-width: ${props => props.theme.breakPoint.sm}) {
        width: 2.4rem;
        height: 2.4rem;
    }
    
    border-radius: 100%;
    align-items: center;
    justify-content: center;

    outline: ${(props) => (!props.selected ? '1px solid '+props.theme.color.black : 'none')};
    background-color: ${(props) => (props.selected ? props.theme.color.P40 : 'none')};
`


export const WhiteCircle = styled.div`
    border-radius: 50%;
    background-color:  ${props => props.theme.color.white};
    width: 1.6rem;
    height: 1.6rem;

    @media only screen and (max-width: ${props => props.theme.breakPoint.sm}) {
        width: 1rem;
    height: 1rem;
    }
    
`