import { RootState } from '@plugins/store';

export const themeSelectors = {
  selectThemeConfig: (state: RootState) => state.theme,
  selectPaletteMode: (state: RootState) => state.theme.palette.mode,
};
