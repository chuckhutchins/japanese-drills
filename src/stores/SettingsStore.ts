import { defineStore } from 'pinia';
import type { Settings } from "@/models";

type SettingsState = {
  currentDrill: string | undefined;
  settings: Settings;
};

export const useSettingsStore = defineStore('settings', {
  state: (): SettingsState => ({
    currentDrill: undefined,
    settings: {
      cycle: 'infinite', // infinite or once
      order: 'random', // random or sequential
      type: 'kana', // kana, kanji, or both
    },
  }),
  getters: {
    isInfinite: (state: SettingsState) => state.settings.cycle === 'infinite',
    isRandom: (state: SettingsState) => state.settings.order === 'random',
  },
  actions: {
    getSettingsForUser() {
      // TODO: fetch user's settings
    },
    saveSettings() {
      // TODO: save user's settings
    },
  },
});
