initialstate={
  isFetching:false,
  Token:null,
  UserDetails:null
}
export default (state=initialstate,action)=>{
  switch(action.type){
    //token Status Value
     case 'User_Token_Request':
     return{...state,isFetching:true}
     case 'User_Token_Success':
     return{...state,isFetching:false,Token:action.payload}
     case 'User_Token_Error':
     return {...state,isFetching:false}
     //Login Status Value
     case 'User_Login_Request':
    return{...state,isFetching:true}
    case 'User_Login_Success':
    return{...state,isFetching:false,UserDetails:action.payload}
    case 'User_Login_Error':
    return{...state,isFetching:false}
//Register status Value
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
