import type { TGenericDocument } from '@plugins/backend/types';

interface IExtractColResult {
  field: string;
}

export function extractDocColumns<T extends TGenericDocument>(
  data: T,
): IExtractColResult[] {
  return Object.keys(data).map((key) => ({ field: key }));
}

export function flattenArrayandExtractUniqueColumns(
  extractedColumns: IExtractColResult[][],
) {
  const flattenedColumnArray = extractedColumns.flat();
  const uniqueColumns: IExtractColResult[] = [];
  flattenedColumnArray.forEach((flattenedColumn) => {
    const columnIndex = uniqueColumns.findIndex(
      (column) => column.field === flattenedColumn.field,
    );
    if (columnIndex <= -1) {
      uniqueColumns.push(flattenedColumn);
    }
  });
  return uniqueColumns;
}
