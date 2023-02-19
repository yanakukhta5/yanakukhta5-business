import { defineStore } from 'pinia'
import axios from 'axios'

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
   },

   async getTokens(){
     const tokenUrl = 'https://test.gnzs.ru/oauth/get-token.php'
     const config = {
      "X-Client-Id": 30878566
     }
     axios.get(tokenUrl, config).then(response => {
      console.log(response)
     })
   }
  }
})

export default store