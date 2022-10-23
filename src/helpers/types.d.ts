import { Column } from 'react-data-grid';

export interface IGridRowInput {
  [key: string]: any;
}

export interface IGridRow {
  id: number;
  [key: string]: any;
}

export interface IGridColumn extends Column<IGridRow> {}
