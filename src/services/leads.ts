import axios from "axios"

class Leads {
 async create(access_token: string){
  const response = await axios({
   method: 'post',
   url: 'http://127.0.0.1:1234/full/leads',
   headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${access_token}`
   },
   data: [{
    name: 'Yana'
   }]
  })

  return response.data._embedded.leads
 }
}

export default new Leads()