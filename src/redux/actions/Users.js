import Axios from 'axios';
import {ToastAndroid} from 'react-native';

const UsersRequest = () => {
  return {
    type: 'USERS_REQUEST',
  };
};

const UsersSuccess = (data) => {
  return {
    type: 'USERS_SUCCESS',
    payload: data,
  };
};
const UsersError = (error) => {
  return {
    type: 'USERS_ERROR',
    payload: error,
  };
};

///delete
const UserDeleteRequest = () => {
  return {
    type: 'USER_DELETE_REQUEST',
  };
};

const UserDeleteSuccess = (data) => {
  return {
    type: 'USER_DELETE_SUCCESS',
    payload: data,
  };
};
const UserDeleteError = (error) => {
  return {
    type: 'USER_DELETE_ERROR',
    payload: error,
  };
};

//edit
const UserEditRequest = () => {
  return {
    type: 'USER_EDIT_REQUEST',
  };
};

const UserEditSuccess = (data) => {
  return {
    type: 'USER_EDIT_SUCCESS',
    payload: data,
  };
};
const UserEditError = (error) => {
  return {
    type: 'USER_EDIT_ERROR',
    payload: error,
  };
};

export const GetUsersById = (fields) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'GET',
      url: `http://192.168.100.8:8000/api/v1/users/${fields.id}`,
      headers: {
        'auth-token': `bearear ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'berhasil');
        dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};

export const GetUsers = (fields) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'GET',
      url: `http://192.168.100.8:8000/api/v1/users`,
      headers: {
        'auth-token': `bearear ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'aaa');
        dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UsersError(message));
      });
  };
};
export const DeleteUser = (fields) => {
  return (dispatch) => {
    dispatch(UserDeleteRequest());
    return Axios({
      method: 'DELETE',
      url: `http://192.168.100.8:8000/api/v1/users/${fields.id}`,
      headers: {
        'access-token': fields.token,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(UserDeleteSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UserDeleteError(message));
      });
  };
};
export const EditUser = (fields) => {
  return (dispatch) => {
    dispatch(UserEditRequest());
    return Axios({
      method: 'PUT',
      url: `http://192.168.100.8:8000/api/v1/users`,
      data: {
        id: fields.id,
        tahun: fields.tahun,
        tempat: fields.tempat,
        jabatan: fields.jabatan,
      },
      headers: {
        'access-token': fields.token,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(UserEditSuccess(data));
        // fields.history.push('/ngademin');
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UserEditError(message));
      });
  };
};
