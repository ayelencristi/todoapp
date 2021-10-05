import axios from 'axios'

const api = axios.create({
    baseURL: "https://todoapp-66107-default-rtdb.firebaseio.com",
})


export { api } 