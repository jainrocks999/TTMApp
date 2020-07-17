initialstate={
  isFetching:false,
    User:null
}
export default (state=initialstate,action)=>{
  switch(action.type){
    case 'User_Login_Request':
    return{...state,isFetching:true}
    case 'User_Login_Success':
    return{...state,isFetching:false,User:action.payload}
    case 'User_Login_Error':
    return{...state,isFetching:false}
    case 'User_Register_Request':
    return{...state,isFetching:true}
    case 'User_Register_Success':
    return{...state,isFetching:false,User:action.payload}
    case 'User_Register_Error':
    return{...state,isFetching:false}
    default:         
    return state;
  }
}
