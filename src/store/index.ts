import { defineStore } from 'pinia'
import axios from 'axios'

type response = {id: number, name: string}

interface StoreType {
 isOptionChosen: boolean
 access_token: string
 subdomain: string
 responses: response[]
 isCreating: boolean
}

const store = defineStore('globalStore', {
  state: (): StoreType => {
   return {
    isOptionChosen: false,
    access_token: '',
    subdomain: '',
    responses: [],
    isCreating: false
   }
  },
  
  actions: {
    changeOptionChosen(newState: boolean){
      this.isOptionChosen = newState
    },

    changeIsCreating(newState: boolean){
      this.isCreating = newState
    },

    changeResponses(newState: response[]){
      this.responses = newState
    },

   async getApi(){
     const tokenUrl = 'http://127.0.0.1:1234/api'
     const SubUrl = 'http://127.0.0.1:1234/sub'
     axios.get(tokenUrl).then(response => {
      this.access_token = response.data.access_token
     }).then(res => axios.get(SubUrl, {
      headers: {
        'Authorization': `Bearer ${this.access_token}`
      }
     })).then(response => this.subdomain = response.data.subdomain)
   }
  }
})

export default store