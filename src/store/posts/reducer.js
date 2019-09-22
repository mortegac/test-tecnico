import { POST_GET } from './constants'
  
  const initialState={
    list: {},
  };
  
  export const postsReducers = (state = initialState, action) => {
    switch (action.type) {
    
      case POST_GET:
        return {
          ...state,
          list: { ...action.payload }
        }; 
   
      default:
        return state;
    }
  };
  
  export default{
    posts: postsReducers,
  };
  