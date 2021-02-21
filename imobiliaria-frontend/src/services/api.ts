import axios from 'axios'
import { clearSession } from './auth'

import { setUserDataOnLocalStorage } from './auth'

const baseUrl = 'http://localhost:3333'

export const publicApi = axios.create({
    baseURL: baseUrl
})

export const privateApi = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: localStorage.getItem('@yahooRespostas') || 'invalid'
    }
})

privateApi.defaults.validateStatus = (status: number) => {
    if (status >= 400) {
        return false
    }

    return true
}


export const logIn = async (email: string, password: string) => {
    clearSession()

    const apiResponse = await publicApi.post('/api/users/authenticate', { email, password })

    setUserDataOnLocalStorage(apiResponse.data)
    privateApi.defaults.headers.authorization = apiResponse.data.token

    return apiResponse.data
}