export interface TableColumns {
    propName: string;
    colTitle: string;
    sort?: boolean;
    width?:string
}

export type TableRows<T> = {
    [K in keyof T]: string;
  } & { key: string, selected?:boolean };


