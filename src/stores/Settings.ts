import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        currentDrill: '',
        style: 'hiragana',
    }),
    actions: {
        setStyle(type: string) {
            this.style = type;
        },
    },
});