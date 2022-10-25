import { useState, useMemo, useEffect } from 'react';
import DG from 'react-data-grid';
import { Box, Typography } from '@mui/material';
import { prepareDataforGrid } from '@/helpers';

import type { DataGridProps, SortColumn } from 'react-data-grid';
import type { IGridRow, IGridColumn } from '@helpers/types';
import type { TGeneriCDocument } from '@plugins/backend/types';

function rowKeyGetter(row: IGridRow) {
  return row.id;
}
interface SummaryRow {
  id: string;
  totalCount: number;
}

interface IGridConfig {
  rows: IGridRow[];
  cols: IGridColumn[];
}

interface IDataGridProps
  extends Omit<DataGridProps<IGridRow, SummaryRow>, 'rows' | 'columns'> {
  data: TGeneriCDocument[];
}

function getComparator(
  sortColumn: string,
): (a: IGridRow, b: IGridRow) => number {
  return (a, b) => {
    return a[sortColumn] > b[sortColumn] ? 1 : -1;
  };
}

function EmptyRowsRenderer() {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
    >
      <Typography sx={{ fontWeight: 'bold' }} variant="h6">
        No Records Found
      </Typography>
    </Box>
  );
}

export function DataGrid(props: IDataGridProps) {
  const { data } = props;

  const [gridConfig, setGridConfig] = useState<IGridConfig>({
    rows: [],
    cols: [],
  });

  const processedData = useMemo((): IGridConfig => {
    const response = prepareDataforGrid(data);
    return response;
  }, [data]);

  useEffect(() => {
    setGridConfig(processedData);
  }, [processedData]);

  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(
    () => new Set(),
  );

  const sortedRows = useMemo((): IGridRow[] => {
    if (sortColumns.length === 0) return gridConfig.rows;

    return [...gridConfig.rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey);
        const compResult = comparator(a, b);
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [gridConfig.rows, sortColumns]);

  return (
    <>
      <DG
        style={{
          height: '100%',
          width: '100%',
        }}
        className="rdg-dark"
        emptyRowsRenderer={EmptyRowsRenderer}
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
        columns={gridConfig.cols}
      />
    </>
  );
}
