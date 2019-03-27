export default (state = [], action) => {
  // VERY COMMON TO SEE SWITCH IN REDUCERS
  
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
    
  }
  
  // bad!
  // return document.querySelector('input');
  // return axios.get('/posts')
};