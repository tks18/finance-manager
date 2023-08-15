import { TGenericCreationAttributes } from '@plugins/backend/types';

export const cleanData = <StateType extends Record<string, any>>(
  state: StateType,
): TGenericCreationAttributes => {
  const cleanedData: { [key: string]: any } = {};
  for (const [obj, vals] of Object.entries(state)) {
    if (vals !== '') {
      cleanedData[obj] = vals;
    }
  }
  return cleanedData as TGenericCreationAttributes;
};
