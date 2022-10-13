import { RootState } from '@plugins/store';

export const settingsSelectors = {
  selectNavBarSettings: (state: RootState) => state.settings.navbar,
};
