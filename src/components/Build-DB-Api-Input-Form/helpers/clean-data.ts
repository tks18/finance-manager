export const cleanData = (state: { [key: string]: any }) => {
  const cleanedData: { [key: string]: any } = {};
  for (const [obj, vals] of Object.entries(state)) {
    if (vals !== '') {
      cleanedData[obj] = vals;
    }
  }
  return cleanedData;
};
