import { 
  LOGIN_USER_FAILED,
  LOGIN_SET_CREDENTIALS,
  LOGOUT_USER,
} from './constants';
import { loadingStart, loadingFinished } from '../loading/actions';
import { errorsAdd } from '../errors/actions';
import services from '../../services/users.services';
import NavigationService from '../../navigation/NavigationService';

export const getLogin = (payload) => {

	return async (dispatch) => {
		try{
      // dispatch(loadingStart('user-login'));

      
      const response = await services.getUserServices(payload);

      if( typeof(response) != 'undefined' ){
        const newPayload={ 
          payload:{
            email: payload.email,
            id: response.id,
            created: response.created
          }
        };
        dispatch({ type: LOGIN_SET_CREDENTIALS, ...newPayload });
        NavigationService.navigate('Home');

      }else{
        const dataPayload = { payload:{error:'El nombre de usuario o contraseña son incorrectos.'}};
        dispatch({ type: LOGIN_USER_FAILED, ...dataPayload });
      }

      // dispatch(loadingFinished('user-login'));
      
    }catch(e){
			dispatch(errorsAdd( {error:e, module:'user-login'} ));
			// dispatch(loadingFinished('user-login'));
		}
	};
};

export const setUser = (payload) => {

	return async (dispatch) => {
		try{
      dispatch(loadingStart('user-create'));
      
      const response = await services.setUserServices(payload);
      if( typeof(response) != 'undefined' ){
        
        const newdata= {
          email: payload.email,
          password: payload.password,
        };
        dispatch(loadingFinished('user-create'));

        dispatch( getLogin(newdata) );
        

      }else{
        
        dispatch(errorsAdd({error:'no llega la data', module:'user-create'}));

      }
      
    }catch(e){
			dispatch(errorsAdd({error:e, module:'user-create'}));
			dispatch(loadingFinished('user-create'));
		}
	};
};

export const setLogout = () => {
	return async (dispatch) => {
		try{
      
        dispatch({ type: LOGOUT_USER });
        NavigationService.navigate('Auth');

      
    }catch(e){
			dispatch(errorsAdd({error:e, module:'user-login'}));
		}
	};
};

export default {
  getLogin,
  setUser,
  setLogout,
};