import { defineStore } from 'pinia'

export const useRunStore = defineStore('runStore', {
  state: () => ({
    registerStep: 'register'
  }),
  getters: {
    GetStep: (state) => state.registerStep
  },
  actions: {
    ChangeStep(step: any) {
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