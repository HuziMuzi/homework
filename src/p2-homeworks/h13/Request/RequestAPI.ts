import axios from "axios";

export const requestAPI = {
    sendRequest (value:boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success:value})

    }
}