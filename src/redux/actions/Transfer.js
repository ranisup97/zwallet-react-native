import Axios from 'axios';
import {ToastAndroid} from 'react-native';

const TransferRequest = () => {
  return {
    type: 'TRANSFER_REQUEST',
  };
};

const TransferSuccess = (data) => {
  return {
    type: 'TRANSFER_SUCCESS',
    payload: data,
  };
};
const TransferError = (error) => {
  return {
    type: 'TRANSFER_ERROR',
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

export const GetTransferById = (fields) => {
  return (dispatch) => {
    dispatch(TransferRequest());
    return Axios({
      method: 'GET',
      url: `http://192.168.100.8:8000/api/v1/transfer/${fields.id}`,
      headers: {
        'auth-token': `bearear ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'berhasil');
        dispatch(TransferSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TransferError(message));
      });
  };
};

export const GetTransfer = (fields) => {
  return (dispatch) => {
    dispatch(TransferRequest());
    return Axios({
      method: 'GET',
      url: `http://192.168.100.8:8000/api/v1/transfer`,
      headers: {
        'auth-token': `bearear ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'aaa');
        dispatch(TransferSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TransferError(message));
      });
  };
};
export const DeleteUser = (fields) => {
  return (dispatch) => {
    dispatch(UserDeleteRequest());
    return Axios({
      method: 'DELETE',
      url: `https://kpu-wonosobo.et.r.appspot.com/api/v1/panitia/${fields.username}`,
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
      url: `https://kpu-wonosobo.et.r.appspot.com/api/v1/panitia/`,
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
        fields.history.push('/ngademin');
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UserEditError(message));
      });
  };
};
