import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core';
export const useRunStore = defineStore('runStore', {
  state: () => ({
    registerStep: useLocalStorage('registerStep', 1)    
  }),
  getters: {
    GetStep: (state) => state.registerStep
  },
  actions: {
    ChangeStep(step: number) {
      this.registerStep = step;
    }
  }
})

/*
  export const useRunStore = defineStore('runStore', {
  state: () => {
    return { registerStep: 'register' }
  },
  actions: {
    ChangeStep(step:) {
      this.registerStep = step;
    }
  }
})
*/