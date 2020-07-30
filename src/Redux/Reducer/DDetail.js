initialstate={
    isFetching:false,
      DDetail:[]
  }
  export default (state=initialstate,action)=>{
    switch(action.type){
      case 'DDetail_Request':
      return{...state,isFetching:true}
      case 'DDetail_Success':
        return{...state,isFetching:false}
      case 'DDetail_Error':
        return{...state,isFetching:false}
      default:         
      return state;
    }
  }
  