import Axios from 'axios';
import {ToastAndroid} from 'react-native';

// Update Phone
const PhoneUpdateRequest = () => {
  return {
    type: 'PHONE_UPDATE_REQUEST',
  };
};
const PhoneUpdateSuccess = (data) => {
  return {
    type: 'PHONE_UPDATE_SUCCESS',
    payload: data,
  };
};
const PhoneUpdateError = (error) => {
  return {
    type: 'PHONE_UPDATE_ERROR',
    payload: error,
  };
};

export const UpdatePhone = (fields) => {
  return (dispatch) => {
    dispatch(PhoneUpdateRequest());
    return Axios({
      method: 'PATCH',
      data: {
        phone: fields.phone,
      },
      url: `http://192.168.1.116:5000/api/v1/profile/updatephone/${fields.id}`,
      headers: {
        authorization: `Bearer + ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'dat');
        dispatch(PhoneUpdateSuccess(data));
        ToastAndroid.show(`Add Phone Successful`, ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PhoneUpdateError(message));
      });
  };
};

// Update Profile
const PatchUserRequest = () => {
  return {
    type: 'PATCHUSER_REQUEST',
  };
};

const PatchUserSuccess = (data) => {
  return {
    type: 'PATCHUSER_SUCCESS',
    payload: data,
  };
};
const PatchUserError = (error) => {
  return {
    type: 'PATCHUSER_ERROR',
    payload: error,
  };
};

export const changePassword = (fields) => {
  return (dispatch) => {
    dispatch(PatchUserRequest());
    return Axios({
      method: 'PATCH',
      data: {
        password: fields.password,
      },
      url: `http://192.168.100.8:8000/api/v1/users/${fields.id}`,
      headers: {
        'auth-token': `bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'ini data');
        dispatch(PatchUserSuccess(data));
        ToastAndroid.show(`Update Successful`, ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PatchUserError(message));
      });
  };
};

// Update User
const UpdateUserRequest = () => {
  return {
    type: 'UPDATE_USER_REQUEST',
  };
};

const UpdateUserSuccess = (data) => {
  return {
    type: 'UPDATE_USER_SUCCESS',
    payload: data,
  };
};
const UpdateUserError = (error) => {
  return {
    type: 'UPDATE_USER_ERROR',
    payload: error,
  };
};

export const UpdateUser = (fields) => {
  return (dispatch) => {
    dispatch(UpdateUserRequest());
    return Axios({
      method: 'PATCH',
      data: {
        username: fields.username,
      },
      url: `http://192.168.1.116:5000/api/v1/profile/${fields.id}`,
      headers: {
        authorization: `Bearer + ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'dat');
        dispatch(UpdateUserSuccess(data));
        ToastAndroid.show(`Update Successful`, ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = err.message;
        dispatch(UpdateUserError(message));
      });
  };
};

// Update Pin
const PinUpdateRequest = () => {
  return {
    type: 'PIN_UPDATE_REQUEST',
  };
};
const PinUpdateSuccess = (data) => {
  return {
    type: 'PIN_UPDATE_SUCCESS',
    payload: data,
  };
};
const PinUpdateError = (error) => {
  return {
    type: 'PIN_UPDATE_ERROR',
    payload: error,
  };
};

export const UpdatePin = (fields) => {
  return (dispatch) => {
    dispatch(PinUpdateRequest());
    return Axios({
      method: 'PATCH',
      data: {
        pin: fields.pin,
      },
      url: `http://192.168.1.116:5000/api/v1/profile/changepin/${fields.id}`,
      headers: {
        authorization: `Bearer + ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'dat');
        dispatch(PinUpdateSuccess(data));
        ToastAndroid.show(`Update Pin Successfully`, ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PinUpdateError(message));
      });
  };
};

// Change Photo
const ChangePhotoRequest = () => {
  return {
    type: 'CHANGE_PHOTO_REQUEST',
  };
};
const ChangePhotoSuccess = (data) => {
  return {
    type: 'CHANGE_PHOTO_SUCCESS',
    payload: data,
  };
};
const ChangePhotoError = (error) => {
  return {
    type: 'CHANGE_PHOTO_ERROR',
    payload: error,
  };
};

export const ChangePhoto = (fields, id) => {
  return (dispatch) => {
    dispatch(ChangePhotoRequest());
    return Axios({
      method: 'PATCH',
      data: {
        photo: fields.photo,
      },
      url: `http://192.168.100.8:8000/api/v1/image/${id}`,
            headers: {
        Authorization: `Bearer + ${fields.token}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        const data = res.data.data;
        console.log(data, 'dat');
        dispatch(ChangePhotoSuccess(data));
        ToastAndroid.show(`Update Photo Successfully`, ToastAndroid.SHORT);
      })
      .catch((err) => {
        const message = err.message;
        dispatch(ChangePhotoError(message));
      });
  };
};