import _ from 'lodash';
import { POST_GET } from './constants';
import { loadingStart, loadingFinished } from '../loading/actions';
import { errorsAdd } from '../errors/actions';
import services from '../../services/post.services';

export const getPost = (payload) => {

	return async (dispatch) => {
		try{
			dispatch(loadingStart('posts-get'));
		
			const response = await services.getPostServices();
			
			console.log(' -+ response -+', response);
		
			if( typeof(response) != 'undefined' ){
				
				
				const newData = _.mapKeys(response, 'id');

				console.log('getPost - newData: ', newData);
				const newPayload = {
					payload:{ ...newData }
				}
				dispatch({ type: POST_GET, ...newPayload });


		//   }else{
		//     const dataPayload = { payload:{error:'El nombre de usuario o contraseña son incorrectos.'}};
		//     dispatch({ type: LOGIN_USER_FAILED, ...dataPayload });
			
			// dispatch(errorsAdd({error:'no llega la data', module:'posts-get'}));

			}

      

      	dispatch(loadingFinished('posts-get'));
      
    }catch(e){
			dispatch(errorsAdd({error:e, module:'posts-get'}));
			dispatch(loadingFinished('posts-get'));
		}
	};
};

// export const getPost = payload => ({
// 	type: types.POST_GET,
// 	payload
// });


export default {
	getPost
};

