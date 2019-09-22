import {
  LOADING_START,
  LOADING_FINISHED
} from './constants'
  
  const initialState={
    fetching: false,
    type:'',
  };
  
  export const loadingReducers = (state = initialState, action) => {
    switch (action.type) {
    
      case LOADING_START:
        return { 
          ...state, 
          type: action.payload, 
          fetching: true 
        };
    
      case LOADING_FINISHED:
        return { ...state, ...initialState };  
    
      default:
        return state;
    }
  };
  
  export default{
    loading: loadingReducers,
  };
  