import styled from "styled-components";
import React, { memo, useRef, useState } from "react";
import { StyledRadiobox, WhiteCircle } from "./RadioBox.style";
interface Props {
    selected ?: boolean;
    onChange ? : (selected:boolean)=>void;
}

function RadioBox(props: Props) {
    const onchange = ()=>{
        //on change
        if(props.onChange) props.onChange(!props.selected)
    }

    return (
        <>
            <StyledRadiobox selected={props.selected} onMouseDown={onchange}>
            {!props.selected || <WhiteCircle></WhiteCircle>}
            </StyledRadiobox>
        </>
    )

}

export default memo(RadioBox)