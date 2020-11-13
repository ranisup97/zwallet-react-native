// import Axios from "axios"
import React from 'react'
import { AsyncStorage } from "react-native"

const TOKEN_KEY = 'jwt'

export const login = () => {
    
    AsyncStorage.setItem(TOKEN_KEY, 'Eykuadkdakdk281368124')
}

export const logout = () => {
    AsyncStorage.removeItem(TOKEN_KEY)
}

export const isLogin = ()=> {
    if(AsyncStorage.getItem(TOKEN_KEY)) {
        return true
    }
    return false
}