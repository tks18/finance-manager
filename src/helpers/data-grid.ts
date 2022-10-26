import type { IGridRowInput, IGridColumn, IGridRow } from './types';

function flattenObject(obj: IGridRowInput) {
  const toReturn: IGridRowInput = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value == 'object' && value !== null && !Array.isArray(value)) {
      const flatObject = flattenObject(value);
      for (const [subKey, subValue] of Object.entries(flatObject)) {
        toReturn[key + '_' + subKey] = subValue;
      }
    } else {
      toReturn[key] = value;
    }
  }
  return toReturn;
}

const prepareColumns = (columnArray: string[]) => {
  const columns: IGridColumn[] = [];
  columnArray.forEach((col) => {
    columns.push({
      key: col,
      name: col,
      resizable: true,
      sortable: true,
      width: 'max-content',
    });
  });
  columns.sort((a, b) => (a.key > b.key ? 1 : -1));
  return columns;
};

const prepareRows = (data: IGridRowInput[]) => {
  const rows: IGridRow[] = [];
  data.forEach((doc, index) => {
    const docToAdd: IGridRow = {} as IGridRow;
    for (const [key, value] of Object.entries(doc)) {
      docToAdd[key] = value;
    }
    docToAdd['id'] = index;
    rows.push(docToAdd);
  });
  return rows;
};

export function prepareDataforGrid(docs: IGridRowInput[]) {
  const columns = docs.length > 0 ? Object.keys(docs[0]) : [];
  const flattenedDocs = docs.map((doc) => flattenObject(doc));

  const colDef = prepareColumns(columns);
  const rowDef = prepareRows(flattenedDocs);

  docs.length > 0 &&
    rowDef.sort((a, b) => (a[columns[0]] > b[columns[0]] ? 1 : -1));

  return {
    rows: rowDef,
    cols: colDef,
  };
}
