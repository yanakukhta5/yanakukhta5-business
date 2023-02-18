import { defineStore } from 'pinia'

interface StoreType {
 isOptionChosen: boolean
}

const store = defineStore('globalStore', {
  state: (): StoreType => {
   return {
    isOptionChosen: false
   }
  },
  
  actions: {
   changeOptionChosen(newState: boolean) {
    this.isOptionChosen = newState
   }
  }
})

export default store