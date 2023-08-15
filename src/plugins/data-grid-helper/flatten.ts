import { flatten } from 'flat';

import type { TGenericDocument } from '@plugins/backend/types';

export function deepFlatten<T extends TGenericDocument>(
  data: T,
): TGenericDocument {
  const flattenedObj = flatten<T, TGenericDocument>(data);
  return flattenedObj;
}
