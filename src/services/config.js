import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://covid19.mathdro.id/api/countries/'
})
