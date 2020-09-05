initialstate={
  isFetching:false,
  Token:null,
  UserDetails:null,
  CopyRight:[],
  DesignDetails:[],
  PatentDetails:[],
  CalendraDetails:[],
  //new api
  RegisteredDetails:[],

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
    //CopyRight details 
    case 'User_CopyRight_Request':
    return{...state,isFetching:true}
    case 'User_CopyRight_Success':
    return{...state,isFetching:false,CopyRight:action.payload}
    case 'User_CopyRight_Error':
    return{...state,isFetching:false}
    //Design Details
    case 'User_Design_Details_Request':
    return{...state,isFetching:true}
    case 'User_Design_details_Success':
    return{...state,isFetching:false,DesignDetails:action.payload}
    case 'User_Design_Details_Error':
    return{...state,isFetching:false}

  //Patent Details
    case 'User_Patent_Details_Request':
    return{...state,isFetching:true}
    case 'User_Patent_Details_Success':
    return{...state,isFetching:false,PatentDetails:action.payload}
    case 'User_Patent_Details_Error':
    return{...state,isFetching:false} 

    //Calendra Details 
    case 'User_Calendra_Details_Request':
    return{...state,isFetching:true}
    case 'User_Calendra_Details_Success':
    return{...state,isFetching:false,CalendraDetails:action.payload}
    case 'User_Calendra_Details_Error':
    return{...state,isFetching:false}
    
    //Registered Details
    case 'User_Registered_Details_Request':
    return{...state,isFetching:true}
    case 'User_Registered_Details_Success':
    return{...state,isFetching:false,RegisteredDetails:action.payload}
    case 'User_Registered_Details_Error':
    return{...state,isFetching:false}


    default:         
    return state;
  }
}
