import axios from 'axios'
import { CreatePropertieInterface, PropertieInterface } from '../interfaces/propertie'
import { AuthResponse } from '../interfaces/user'
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


export const logIn = async (email: string, password: string): Promise<AuthResponse> => {
    clearSession()

    const apiResponse = await publicApi.post('/api/users/authenticate', { email, password })

    setUserDataOnLocalStorage(apiResponse.data)
    privateApi.defaults.headers.authorization = apiResponse.data.token

    return apiResponse.data
}

export const createPropertie = async (propertie: CreatePropertieInterface): Promise<PropertieInterface> => {
    const apiResponse = await privateApi.post('/api/users', propertie)

    return apiResponse.data
}