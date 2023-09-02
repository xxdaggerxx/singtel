import styled from "styled-components";
import React, { useRef, useState } from "react";
import { ButtonCircle, SvgButton } from "./SortButton.style";

interface Props {
    sort?: boolean;
    headerName?: string;
    onSort?: (asc:boolean)=>void;
}

export function SortButton(props: Props) {
    const [asc, setAsc] = useState<boolean | null>(null)

    const changeSort = ()=>{
        ///on change sort.
        setAsc(x=>{
            const newAsc : boolean= !x;
            if(props?.onSort) props?.onSort(newAsc)
            return newAsc
        })
    }

    return (
        <>
           <SvgButton onMouseDown={changeSort} >

               {(asc==null) && <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.43789 0.195262C4.69824 -0.0650872 5.12035 -0.0650872 5.3807 0.195262L9.62334 4.4379C9.88369 4.69825 9.88369 5.12036 9.62334 5.38071C9.36299 5.64106 8.94088 5.64106 8.68053 5.38071L5.57596 2.27614L5.57596 12.3905L8.68053 9.28596C8.94088 9.02561 9.36299 9.02561 9.62334 9.28596C9.88369 9.5463 9.88369 9.96841 9.62334 10.2288L5.3807 14.4714C5.12035 14.7318 4.69824 14.7318 4.43789 14.4714L0.195251 10.2288C-0.0650984 9.96841 -0.0650984 9.54631 0.195251 9.28596C0.4556 9.02561 0.877711 9.02561 1.13806 9.28596L4.24263 12.3905L4.24263 2.27614L1.13806 5.38071C0.877711 5.64106 0.4556 5.64106 0.195251 5.38071C-0.0650986 5.12036 -0.0650986 4.69825 0.195251 4.4379L4.43789 0.195262Z" fill="#222222" />
                </svg>}

                {(asc == true) && <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.50668 10.2288L5.31547 14.4714C5.05828 14.7318 4.64129 14.7318 4.3841 14.4714L0.192895 10.2288C-0.0642973 9.96841 -0.0642973 9.54631 0.192895 9.28596C0.450088 9.02561 0.867081 9.02561 1.12427 9.28596L4.1912 12.3905L4.1912 0.666667C4.1912 0.298477 4.48606 1.84549e-07 4.84978 1.71674e-07C5.21351 1.58799e-07 5.50837 0.298477 5.50837 0.666667L5.50837 12.3905L8.5753 9.28596C8.83249 9.02561 9.24948 9.02561 9.50668 9.28596C9.76387 9.5463 9.76387 9.96841 9.50668 10.2288Z" fill="#222222" />
                </svg>}

                {(asc == false) && <svg  transform="rotate(180)" xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                    <path  fillRule="evenodd" clipRule="evenodd" d="M9.50668 10.2288L5.31547 14.4714C5.05828 14.7318 4.64129 14.7318 4.3841 14.4714L0.192895 10.2288C-0.0642973 9.96841 -0.0642973 9.54631 0.192895 9.28596C0.450088 9.02561 0.867081 9.02561 1.12427 9.28596L4.1912 12.3905L4.1912 0.666667C4.1912 0.298477 4.48606 1.84549e-07 4.84978 1.71674e-07C5.21351 1.58799e-07 5.50837 0.298477 5.50837 0.666667L5.50837 12.3905L8.5753 9.28596C8.83249 9.02561 9.24948 9.02561 9.50668 9.28596C9.76387 9.5463 9.76387 9.96841 9.50668 10.2288Z" fill="#222222" />
                </svg>}

                <ButtonCircle ></ButtonCircle>

            </SvgButton>

            
        </>
    )

}