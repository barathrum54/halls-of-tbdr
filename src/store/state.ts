// state.ts

import { defineStore } from "pinia";

export const useAppState = defineStore("app", {
  state: () => ({
    currentState: "",
  }),
  actions: {
    setCurrentState(state: any) {
      this.currentState = state;
    },
    getCurrentState() {
      return this.currentState;
    },
  },
});
