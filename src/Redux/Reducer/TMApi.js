initialstate={
    isFetching:false,
    TMApi:[]
  }
  export default (state=initialstate,action)=>{
    switch(action.type){
      case 'TMApi_Request':
      return{...state,isFetching:true}
      case 'TMApi_Success':
        return{...state,isFetching:false}
      case 'TMApi_Error':
        return{...state,isFetching:false}
      default:         
      return state;
    }
  }
  