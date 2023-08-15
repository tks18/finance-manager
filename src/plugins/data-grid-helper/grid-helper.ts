import {
  extractDocColumns,
  flattenArrayandExtractUniqueColumns,
} from './extract';
import { deepFlatten } from './flatten';

import type { TGenericDocument } from '@plugins/backend/types';

type TDataGridColumn = { field: string };

export interface IDataGridObject {
  columns: TDataGridColumn[];
  rows: TGenericDocument[];
}

export function constructDataGridObject<T extends TGenericDocument>(
  docs: T[],
): IDataGridObject {
  const flattenedDocs = docs.map((doc) => deepFlatten<TGenericDocument>(doc));
  const columnsArray = flattenedDocs.map((flatDoc) =>
    extractDocColumns(flatDoc),
  );
  const uniqueColumns = flattenArrayandExtractUniqueColumns(columnsArray);
  const returnData: IDataGridObject = {
    columns: uniqueColumns,
    rows: flattenedDocs,
  };
  return returnData;
}
