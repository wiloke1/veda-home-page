import { isBrowser } from './isBrowser';

export const builderMode = {
  set(value: boolean) {
    if (isBrowser) {
      window.builderMode = value;
    }
  },
  get() {
    if (isBrowser) {
      return window.builderMode;
    }
    return false;
  },
};
