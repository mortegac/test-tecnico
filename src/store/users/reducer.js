import {
  LOGIN_USER_FAILED,
  LOGIN_SET_CREDENTIALS,
  LOGOUT_USER,
  REGISTER_USER
} from './constants'
  
  const initialState={
    id:0,
    email: '',
    password:'',
    created: new Date(),
    isLogin:false,
    errorMsg:'',
  };
  
 
  export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
    
      case LOGIN_SET_CREDENTIALS:
        return {
          ...state,
          ...action.payload
        };

      case LOGIN_USER_FAILED:    
        return{
          ...initialState,
          errorMsg: action.payload.error
      };    
      case LOGOUT_USER:
        return { ...initialState };  
    
      case REGISTER_USER:
          return { ...action.payload };  
     
      default:
        return state;
    }
  };

  export default{
    users: usersReducers,
  };
  