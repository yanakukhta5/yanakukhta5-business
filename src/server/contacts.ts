import axios from "axios"

class Contacts {
 create(access_token: string){
  axios({
   method: 'post',
   url: 'http://127.0.0.1:1234/full',
   headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${access_token}`
   },
   data: [{
    name: 'Yana'
   }]
  })
 }
}

export default new Contacts()