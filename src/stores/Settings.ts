import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    currentDrill: '',
    style: 'hiragana',
    settings: {
      cycle: 'infinite',
      order: 'random',
      type: 'hiragana',
    },
  }),
  getters: {
    isInfinite: (state) => state.settings.cycle === 'infinite',
    isRandom: (state) => state.settings.order === 'random',
  },
  actions: {
    setStyle(type: string) {
      this.style = type;
    },
  },
});
