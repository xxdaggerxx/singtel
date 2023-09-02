import styled from "styled-components";
import React, { useRef, useState } from "react";
import { StyledCheckbox } from "./CheckBox.style";
interface Props {
    selected: boolean
}

export function CheckBox(props: Props) {
    const [selected, setSelected] = useState<boolean>(props.selected)

    return (
        <>
            <StyledCheckbox selected={selected} onMouseDown={()=>setSelected(x=>!x)}>
                {!selected || <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.0781 2.91069C15.4035 3.23669 15.4035 3.76402 15.0781 4.08935L6.49013 12.6774L6.48312 12.6846C6.47838 12.6896 6.47356 12.6945 6.46867 12.6994C6.14267 13.0241 5.61533 13.0241 5.29 12.6994L0.910668 8.32009C0.585335 7.99409 0.585335 7.46609 0.910668 7.14142C1.236 6.81609 1.76333 6.81609 2.08933 7.14142L5.87867 10.9314L13.8995 2.91069C14.2255 2.58535 14.7528 2.58535 15.0781 2.91069Z" fill="white" />
                </svg>}
            </StyledCheckbox>
        </>
    )

}