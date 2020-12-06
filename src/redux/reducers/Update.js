const initialState = {
    data: [],
    loading: false,
  };
  
  const Update = (state = initialState, action = {}) => {
    switch (action.type) {
      // Update Phone
      case 'PHONE_UPDATE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'PHONE_UPDATE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
        };
      case 'PHONE_UPDATE_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data: [],
          error: action.payload,
        };
  
      // Update Password
      case 'PATCHUSER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'PATCHUSER_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
        };
      case 'PATCHUSER_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data: [],
          error: action.payload,
        };
  
      // Update User
      case 'UPDATE_USER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'UPDATE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
        };
      case 'UPDATE_USER_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data: [],
          error: action.payload,
        };
  
      // Update Pin
      case 'PIN_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'PIN_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
        };
      case 'PIN_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data: [],
          error: action.payload,
        };
  
      // Change Photo
      case 'CHANGE_PHOTO_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'CHANGE_PHOTO_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.data,
        };
      case 'CHANGE_PHOTO_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default Update;