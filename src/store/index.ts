import { defineStore } from 'pinia'
import axios from 'axios'

interface StoreType {
 isOptionChosen: boolean
 access_token: string
 subdomain: string
}

const store = defineStore('globalStore', {
  state: (): StoreType => {
   return {
    isOptionChosen: false,
    access_token: '',
    subdomain: ''
   }
  },
  
  actions: {
   changeOptionChosen(newState: boolean) {
    this.isOptionChosen = newState
   },

   async getApi(){
     const tokenUrl = 'http://127.0.0.1:1234/api'
     const url = 'http://127.0.0.1:1234/sub'
     axios.get(tokenUrl).then(response => {
      this.access_token = response.data.access_token
     }).then(res => axios.get(url, {
      headers: {
        'Authorization': `Bearer ${this.access_token}`
      }
     })).then(response => this.subdomain = response.data.subdomain).finally(() => {
      console.log(this.subdomain, this.access_token)
     })
   }
  }
})

export default store