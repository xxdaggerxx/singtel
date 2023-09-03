import React, { memo, useMemo, useRef, useState } from "react";
import { TableColumns, TableRows } from "../SingtelTable.types";
import { TableRow } from "../SingtelTable.style";
import { TableCell } from "../TableCell/TableCell";
import CheckBox from "../../checkbox/CheckBox";
import RadioBox from "../../RadioBox/RadioBox";
import { useWindowWidth } from "../../utils/useMobileScreen";
import { MobileCell } from "../TableCell/MobileCell";

interface Props<T> {
    cols: TableColumns[];
    row: TableRows<T>;
    selectionType?: 'multi' | 'single';
    mobileCollapsed?: boolean;
    multiSelect: (row:TableRows<T>)=>void;
    singleSelect: (row:TableRows<T>)=>void;
}

function TableRowContent<T>(props: Props<T>) {
    const isMobile = useWindowWidth()
   const renders = useRef<number>(0)


   const renderRow = useMemo(()=> (<TableRow key={props.row.key} selected={!!props.row.selected}>
        {(props.selectionType == 'multi') && <TableCell ><CheckBox onChange={() => props.multiSelect(props.row)} selected={!!props.row.selected} /></TableCell>}
        {(props.selectionType == 'single') && <TableCell ><RadioBox onChange={() => props.singleSelect(props.row)} selected={!!props.row.selected} /></TableCell>}
        {(props.mobileCollapsed && isMobile) ? <MobileCell>
            <label>
                {props?.cols.map(cols=><span key={cols.propName}>{cols.colTitle} : <br/></span>)}
            </label>
            <span>
                {props?.cols.map(cols=><span key={cols.propName}>{props.row[cols.propName as keyof T]} <br/></span>)}
            </span>
        </MobileCell> :
            <>{props?.cols.map((col: TableColumns) => <TableCell key={col.propName + "-" + props.row.key} className={col.propName + "-" + props.row.key}>{props.row[col.propName as keyof T]}</TableCell>)}
            </>}

    </TableRow>), [isMobile, props.row.key, props.row.selected, props.selectionType]);

    return renderRow

}

export default TableRowContent;