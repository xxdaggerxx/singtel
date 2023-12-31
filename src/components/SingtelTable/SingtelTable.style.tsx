import styled from "styled-components";
import React from "react";
import { mobileBreakPoint, dynamicFontSizingHeader, dynamicFontSizingCell} from "../utils/styling.utils"



export const Table = styled.table`
width: 100%;
border-collapse:collapse;
`
export const TableHeader = styled.thead`
    background-color: ${props => props.theme.color.N10};
    font-family: 'AvenirHeavy';
     ${dynamicFontSizingHeader()}

    text-align: left ;
    
    th {
         /* top | right | bottom | left */
        ${mobileBreakPoint('padding: 2.4rem 2.4rem 2.4rem 0rem;', 
        'padding: 0.8rem 1.6rem 0.8rem 0rem;')}

        //width: fit-content;
        .CellContents{
            display: flex;
            flex-direction: row;
            gap: 1.7rem;
        }
    }
        th:first-child {
                ${mobileBreakPoint('padding: 2.4rem;  border-top-left-radius:1.6rem;', 
        'padding: 0.8rem 1.6rem 0.8rem 1.6rem;  border-top-left-radius:0.8rem;')}

        }
        th:last-child {
                
                ${mobileBreakPoint('border-top-right-radius:1.6rem;', 
        'border-top-right-radius:0.8rem;')}

        }
`

interface TableRowProps{
    selected?:boolean | undefined;
}
export const TableRow = styled.tr<TableRowProps>`
   background-color: ${(props) => (props.selected ? props.theme.color.P10 : 'none')};
`

export const TableBody = styled.tbody`
    background-color: ${props => props.theme.color.white};
   font-family: 'AvenirBook';
   ${dynamicFontSizingCell()}
   text-align: left; 
   th{
        font-weight: inherit;
        vertical-align: bottom;
        .CellContents{
            box-sizing: border-box;
            /* top | right | bottom | left */
            ${mobileBreakPoint('padding: 2.4rem 2.4rem 2.4rem 0rem;', 
        'padding: 0.8rem 1.6rem 0.8rem 0rem;')}
            border-bottom: 1px solid ${props => props.theme.color.N20};
        }
        //border-bottom: 1px solid ${props => props.theme.color.N20};
    }

    th:first-child{

            ${mobileBreakPoint(' padding-left: 2.4rem;', 
        ' padding-left: 1.6rem;')}
        
    }

    th:last-child{
        padding-right: 2.4rem;
    }

    tr .MobileCell{
        border-bottom: 1px solid ${props => props.theme.color.N20};
       // padding-left: 1.6rem;
      //  padding-left: 1.6rem;
    }
    
    tr th:first-child.MobileCell{
        padding-left: 0rem;
        margin-left: 1.6rem;
    }


    tr:last-child{
        .CellContents{
            border-bottom:none;
        }
        th:last-child{

            ${mobileBreakPoint('border-bottom-right-radius:1.6rem;', 
        'border-bottom-right-radius:0.8rem;')}
        }
        th:first-child{
            ${mobileBreakPoint('border-bottom-left-radius:1.6rem;', 
        'border-bottom-left-radius:0.8rem;')}
        }
        .MobileCell{
             border-bottom: none;
        }
    }
  

    
`

export const SortButton = styled.button`
    background: url(Arrow) no-repeat top left;
    background-size: contain;
    //14.67 x 9.7
    width: 10px;
    height: 14px;
    cursor: pointer;
`

export const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    box-shadow:  ${props => props.theme.shadow.low};
    border-radius: 1.6rem;

    ${mobileBreakPoint('border-radius: 1.6rem;', 
        'border-radius: 0.8rem;')}
`