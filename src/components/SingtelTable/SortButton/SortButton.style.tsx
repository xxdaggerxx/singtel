import styled from "styled-components";


export const SvgButton = styled.button`
    border: none;
    background-color: inherit;
    cursor: pointer;
    border-radius: 50%;
    svg{
        position: relative;
        z-index: 100;
    }

    &:hover div{
        display: block;
    }

`


export const ButtonCircle = styled.div`
    position: absolute;
    margin-left: -2rem;
    margin-top: -3.8rem;
    height: 5.6rem; 
    width: 5.2rem;
     border-radius: 50%;
     background-color: ${props => props.theme.color.P1};
     display: none;
`