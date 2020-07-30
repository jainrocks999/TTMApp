initialstate={
    isFetching:false,
      CRDetail:[]
  }
  export default (state=initialstate,action)=>{
    switch(action.type){
      case 'CRDetail_Request':
      return{...state,isFetching:true}
      case 'CRDetail_Success':
        return{...state,isFetching:false}
      case 'CRDetail_Error':
        return{...state,isFetching:false}
      default:         
      return state;
    }
  }
  