import { AuthResponse } from "../interfaces/user"
import { privateApi } from "./api"

export const isUserAutheticated = (): boolean => {
    const token = localStorage.getItem('@yahooRespostas')

    if (token) return true

    return token ? true : false
}


export const clearSession = () => {
    privateApi.defaults.headers.authorization = 'invalid'
}

export const setUserDataOnLocalStorage = (user: AuthResponse) => {
    if (user.token) localStorage.setItem('@yahooRespostas', user.token)

    localStorage.setItem('@userData', JSON.stringify({
        email: user.email,
        name: user.name,
    }))

    return true
}