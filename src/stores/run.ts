import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core';
export const useRunStore = defineStore('runStore', {
  state: () => ({
    currentStep: useLocalStorage('currentStep', 1)
  }),
  getters: {
    GetStep: (state) => state.currentStep
  },
  actions: {
    UpdateCurrentStep(step: number) {      
      this.currentStep = step;
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