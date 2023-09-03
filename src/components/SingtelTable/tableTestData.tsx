import { TableColumns, TableRows } from "./SingtelTable.types";

export const coldata1: TableColumns[] = [
    { propName: "operator", colTitle: "Operator", sort:true, },
    { propName: "headset", colTitle: "Headset Display" },
    { propName: "avaliability", colTitle: "3G Availability" , sort:true, }
]


export interface Data1 {
    operator:string;
    headset:string;
    avaliability: string;
}
export const rowdata1: TableRows<Data1>[]  = [
    { key: '1', operator: '*Celcom Axiata (LTE)', headset: 'CELCOM / My Celcom / 502 19', avaliability: '3' },
    { key: '2', operator: '*DiGi Telecom (LTE)', headset: 'DiGi 1800 / DiGi /  MYMY18', avaliability: '1'} ,
    { key: '3',  operator: '*Maxis (LTE)', headset: 'U Mobile / MYS 18 / MY 18', avaliability: '2'} ,
    { key: '4', operator: 'U Mobile (LTE)', headset: 'CELCOM / My Celcom / 502 19', avaliability: '4'} ,
];