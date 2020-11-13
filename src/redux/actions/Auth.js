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
            url: 'http://192.168.100.4:8000/api/v1/auth/login'
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            ToastAndroid.show(
                `Login Succesfully, welcome ${data.token.firstName}`,
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
