import { useState, useMemo } from 'react';
import DG from 'react-data-grid';

import type { DataGridProps, SortColumn } from 'react-data-grid';
import type { IGridRow, IGridColumn } from '@helpers/types';

function rowKeyGetter(row: IGridRow) {
  return row.id;
}

interface IGridConfig {
  rows: IGridRow[];
  cols: IGridColumn[];
}
interface SummaryRow {
  id: string;
  totalCount: number;
}

interface IDataGridProps
  extends Omit<DataGridProps<IGridRow, SummaryRow>, 'rows' | 'columns'> {
  config: IGridConfig;
}

function getComparator(
  sortColumn: string,
): (a: IGridRow, b: IGridRow) => number {
  return (a, b) => {
    return a[sortColumn] > b[sortColumn] ? 1 : -1;
  };
}

export function DataGrid(props: IDataGridProps) {
  const { config } = props;
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(
    () => new Set(),
  );

  const sortedRows = useMemo((): IGridRow[] => {
    if (sortColumns.length === 0) return config.rows;

    return [...config.rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey);
        const compResult = comparator(a, b);
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [config.rows, sortColumns]);

  return (
    <>
      <DG
        style={{
          height: '100%',
          width: '100%',
        }}
        className="rdg-dark"
        rowKeyGetter={rowKeyGetter}
        rows={sortedRows}
        sortColumns={sortColumns}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        onSortColumnsChange={setSortColumns}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
        columns={config.cols}
      />
    </>
  );
}
