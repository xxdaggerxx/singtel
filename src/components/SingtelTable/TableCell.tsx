import styled from "styled-components";
import React, { useRef } from "react";
import { SortButton } from "./SortButton/SortButton";

interface Props {
    children?: React.ReactNode,
    sort?: boolean;
}

export function TableCell(props: Props) {

    return (
        <th  >
            <div className="CellContents"> <span>{props?.children}</span> {!props.sort || <SortButton/>}</div>
        </th>
    )

}