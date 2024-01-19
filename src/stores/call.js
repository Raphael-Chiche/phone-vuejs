import { defineStore } from 'pinia';

export const useJournalStore = defineStore('call',{
  state: () => ({
    calls: [],
  }),
  actions: {
    addCall(call) {
      this.calls.push(call);
    },
  },
});