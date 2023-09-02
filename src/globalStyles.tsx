import { createGlobalStyle } from "styled-components";
import AvenirBook from './assets/Avenir-Book.ttf';
import AvenirHeavy from './assets/Avenir-Heavy.ttf';
export const GlobalStyle = createGlobalStyle`


@font-face {
    font-family: 'AvenirBook';
    src: url(${AvenirBook});
    font-style: normal;
    font-weight: 350;
    line-height: 35px; /* 175% */
    letter-spacing: 0.02px;
    color: ${props => props.theme.color.black}
  }


  @font-face {
    font-family: 'AvenirHeavy';
    src: url(${AvenirHeavy});
    font-style: normal;
    font-weight: 700;
    line-height: 32px; 
    color: ${props => props.theme.color.black}
}


html{
        font-size: 10px;
    }

  body {
    padding: 1rem;
    margin: 0rem;
    font-family: 'AvenirBook', Verdana, Geneva, Tahoma, sans-serif;
    background-color: red;
  }


`