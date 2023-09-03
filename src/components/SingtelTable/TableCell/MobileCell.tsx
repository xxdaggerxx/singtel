import styled from "styled-components";
import React from "react";

export const MobileCell = styled.th.attrs(props=>({
    className: "MobileCell"
}))`
display: flex;
flex-direction: row;
gap: 1rem;
line-height: 2.4rem;
margin-right: 1.6rem;
label{
    font-family: 'AvenirHeavy';
}
`