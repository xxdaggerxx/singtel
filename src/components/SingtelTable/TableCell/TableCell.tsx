import styled from "styled-components";
import React, { useRef } from "react";
import { SortButton } from "../SortButton/SortButton";

interface Props {
    children?: React.ReactNode,
    sort?: boolean;
    className?:string;
    style?: React.CSSProperties;
    onSort?: (asc:boolean)=>void;
}

export function TableCell(props: Props) {

    return (
        <th className={props?.className} style={props.style} >
            <div className="CellContents"> <span>{props?.children}</span> {!props.sort || <SortButton onSort={props.onSort}/>}</div>
        </th>
    )

}