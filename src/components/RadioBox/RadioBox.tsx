import styled from "styled-components";
import React, { useRef, useState } from "react";
import { StyledRadiobox, WhiteCircle } from "./RadioBox.style";
interface Props {
    selected: boolean
}

export function RadioBox(props: Props) {
    const [selected, setSelected] = useState<boolean>(props.selected)

    return (
        <>
            <StyledRadiobox selected={selected} onMouseDown={()=>setSelected(x=>!x)}>
            {!selected || <WhiteCircle></WhiteCircle>}
            </StyledRadiobox>
        </>
    )

}