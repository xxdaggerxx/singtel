
import React, { CSSProperties, useImperativeHandle, useMemo, useState } from "react";
import { TableBody, TableHeader, TableRow, Table, TableContainer } from "./SingtelTable.style";
import { TableCell } from "./TableCell/TableCell";
import { TableColumns, TableRows } from "./SingtelTable.types";
import { useWindowWidth } from "../utils/useMobileScreen";
import  TableRowContent  from "./TableRowContent/TableRowContent";



//TODO: fix bottom lines

interface Props<T> {
    /** Table Column Details, propname must be unique*/
    cols: TableColumns[];
    /** Table Row Details, must include unique key */
    rows: TableRows<T>[];
    /** Toggle between multi or single select, leave empty if no selection is required. */
    selectionType?: 'multi' | 'single';
    /** Function called when user selects rows. Returns selected table rows */
    onSelect?: (selected: TableRows<T>[]) => void;
    /** toggle the mobile view if viewport is below mobile breakpoint */
    mobileCollapsed?: boolean;
     /** Title of table use only if mobileCollapsed is true */
    title?: string;
    /** Style the table container, great to use for setting container width */
    style?: CSSProperties;
}
/** A Sortable datatable for mobile and desktop, includes single & multiselect options, made by aaron.issac@gmail.com 
 * Based on : https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?node-id=0%3A1&mode=dev
*/
export function SingtelTable<T>(props: Props<T>) {

    const [rows, setRows] = useState<TableRows<T>[]>(props.rows)
    const isMobile = useWindowWidth()

    // Handle multi selection
    const multiSelect = (selectedRow: TableRows<T>) => {
        //on multi select
        setRows(row => {
            let newRows = row.map(x => ({ ...x, selected: selectedRow.key == x.key ? !!!x.selected : x.selected }))
            if (props.onSelect) props.onSelect(newRows.filter(x => x.selected))
            return newRows
        })
    }

    //handle single selection
    const singleSelect = (selectedRow: TableRows<T>) => {
        //on multi select
        setRows(row => {
            let newRows = row.map(x => ({ ...x, selected: selectedRow.key == x.key }))
            if (props.onSelect) props.onSelect(newRows.filter(x => x.selected))
            return newRows
        })
    }

    // handle sorting
    const onSortRows = (sortType: boolean, propName: keyof T) => {
        // on sort.
        setRows(row => {
            let newRows;

            if (sortType) {
                newRows = row.sort((a, b) => (a[propName] > b[propName]) ? 1 : ((b[propName] > a[propName]) ? -1 : 0))
            } else {
                newRows = row.sort((a, b) => (a[propName] < b[propName]) ? 1 : ((b[propName] < a[propName]) ? -1 : 0))
            }
            return [...newRows]
        })
    }

    /// expose function
/*     useImperativeHandle(props.ref, () => ({
        forceRender,
      }));

        //force render
    const forceRender = () => {
        //on multi select
        setRows(x=>([...x]))
    } */

    return (

        <TableContainer style={props.style} data-testid="SingtelTable" className="SingtelTable-Container">
            <Table>
                <TableHeader>
                    <TableRow>
                        {!props.selectionType || <TableCell style={{ width: "1rem" }} > </TableCell>}

                        {(props.mobileCollapsed && isMobile) ? <TableCell>{props.title}</TableCell> : 
                        
                        <>{props?.cols.map(x => <TableCell style={{ width: x.width }} key={x?.propName} sort={x?.sort} onSort={(v) => onSortRows(v, x.propName as keyof T)}> {x?.colTitle} </TableCell>)}
                        </>}

                    </TableRow>
                </TableHeader>

                <TableBody>

                    {rows.map((row: TableRows<T>) =>
                        <TableRowContent<T>
                            key={row.key}
                        multiSelect={multiSelect}
                        singleSelect={singleSelect}
                        row={row} 
                        cols={props.cols} 
                        selectionType={props.selectionType} 
                        mobileCollapsed={props.mobileCollapsed} />
                        )}

                </TableBody>

            </Table>
        </TableContainer>
    )

}




{/* <TableContainer  >
<Table>
    <TableHeader>
        <TableRow>
            <TableCell > </TableCell>
            <TableCell sort={true}>Operator </TableCell>
            <TableCell sort={true}>Headset Display</TableCell>
            <TableCell>3G Availability</TableCell>
        </TableRow>
    </TableHeader>

    <TableBody>
        <TableRow>
            <TableCell></TableCell>
            <TableCell>*Celcom Axiata (LTE)</TableCell>
            <TableCell>DiGi 1800 / DiGi /  MYMY18</TableCell>
            <TableCell>Yes</TableCell>
        </TableRow>
        <TableRow selected={true}>
            <TableCell><CheckBox selected={true}></CheckBox></TableCell>
            <TableCell>*Celcom Axiata (LTE)</TableCell>
            <TableCell>DiGi 1800 / DiGi /  MYMY18</TableCell>
            <TableCell>Yes</TableCell>
        </TableRow>
        <TableRow>
            <TableCell><RadioBox selected={true}/></TableCell>
            <TableCell>Hello worls thiss H</TableCell>
            <TableCell>DiGi 1800 / </TableCell>
            <TableCell>Yes</TableCell>
        </TableRow>
        <TableRow >
            <TableCell></TableCell>
            <TableCell>*Celcom Axiata (LTE)</TableCell>
            <TableCell>DiGi 1800 / DiGi /  MYMY18</TableCell>
            <TableCell>
                <MobileCell>
                    <label>
                    Operator:<br/>
                    Headset Display:<br/>
                    3G Availability:<br/>
                    </label> 
                    <span>
                    hi sharks<br/>
                    dsd<br/>
                    Barber Co<br/>
                    </span>
                </MobileCell>
      
            </TableCell>
        </TableRow>
    </TableBody>

</Table>
</TableContainer> */}

