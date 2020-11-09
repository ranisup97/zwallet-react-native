import Axios from 'axios'
import { ToastAndroid } from 'react-native'

const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

const AuthLoginSuccess = (data)=> {
    return{
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}
const AuthLoginError = (error)=> {
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}



export const AuthLogin = (fields) => {
    return (dispatch) =>{
        dispatch(AuthLoginRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: 'https://travel.mahirtechno.xyz/api/login'
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            ToastAndroid.show(
                `Login Sukses, Selamat Datang ${data.data.name}`,
                ToastAndroid.SHORT,
            );
            dispatch(AuthLoginSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthLoginError(message))
        })
    }
}


export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
