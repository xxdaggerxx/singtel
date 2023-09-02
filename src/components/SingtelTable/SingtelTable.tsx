import styled from "styled-components";
import React from "react";
import { TableBody, TableHeader, TableRow, Table, TableContainer } from "./SingtelTable.style";
import { TableCell } from "./TableCell";
import { CheckBox } from "../checkbox/CheckBox";
import { RadioBox } from "../RadioBox/RadioBox";
import { MobileCell } from "./MobileCell";


//props:
///rows
//columns ,  sizing

//onselect
//selectinon type
//mobile screen type
//force update

export function SingtelTable() {

    return (

        <TableContainer  >
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
        </TableContainer>
    )

}

