initialstate = {
  isFetching: false,
  Token: null,
  UserDetails: null,
  User:null,
  CopyRight: [],
  DesignDetails: [],
  PatentDetails: [],
  CalendraDetails: [],
  //new api
  RegisteredDetails: [],
  DashboardDetails:[],
  CountryName:[],
  stateName:[]
};
export default (state = initialstate, action) => {
  console.log('Dekho yaro'+action.type)
  console.log('Dekho yaro'+action.payload)
  switch (action.type) {
    
    //token Status Value
    case 'User_Token_Request':
      return {...state, isFetching: true};
    case 'User_Token_Success':
      return {...state, isFetching: false, Token: action.payload};
    case 'User_Token_Error':
      return {...state, isFetching: false};

    //Login Status Value
    case 'User_Login_Request':
      return {...state, isFetching: true};
    case 'User_Login_Success':
      return {...state, isFetching: false, UserDetails: action.payload};
    case 'User_Login_Error':
      return {...state, isFetching: false};

    //Register status Value
    case 'User_Register_Request':
      return {...state, isFetching: true};
    case 'User_Register_Success':
      return {...state, isFetching: false, User: action.payload};
    case 'User_Register_Error':
      return {...state, isFetching: false};

    //CopyRight details
    case 'User_CopyRight_Request':
      return {...state, isFetching: true};
    case 'User_CopyRight_Success':
      return {...state, isFetching: false, CopyRight: action.payload};
    case 'User_CopyRight_Error':
      return {...state, isFetching: false};

    //Design Details
    case 'User_Design_Details_Request':
      return {...state, isFetching: true};
    case 'User_Design_details_Success':
      return {...state, isFetching: false, DesignDetails: action.payload};
    case 'User_Design_Details_Error':
      return {...state, isFetching: false};

    //Patent Details
    case 'User_Patent_Details_Request':
      return {...state, isFetching: true};
    case 'User_Patent_Details_Success':
      return {...state, isFetching: false, PatentDetails: action.payload};
    case 'User_Patent_Details_Error':
      return {...state, isFetching: false};

    //Calendra Details
    case 'User_Calendra_Details_Request':
      return {...state, isFetching: true};
    case 'User_Calendra_Details_Success':
      return {...state, isFetching: false, CalendraDetails: action.payload};
    case 'User_Calendra_Details_Error':
      return {...state, isFetching: false};

    //Registered Details
    case 'User_Registered_Details_Request':
      return {...state, isFetching: true};
    case 'User_Registered_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_Registered_Details_Error':
      return {...state, isFetching: false};

    //Lost Details
    case 'User_Lost_Details_Request':
      return {...state, isFetching: true};
    case 'User_Lost_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_Lost_Details_Error':
      return {...state, isFetching: false};

    //Litigation Details
    case 'User_Litigation_Details_Request':
      return {...state, isFetching: true};
    case 'User_Litigation_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_Litigation_Details_Error':
      return {...state, isFetching: false};

    //Pending Details
    case 'User_Pending_Details_Request':
      return {...state, isFetching: true};
    case 'User_Pending_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_Pending_Details_Error':
      return {...state, isFetching: false};

    //MyTrademark Details
    case 'User_MyTrademark_Details_Request':
      return {...state, isFetching: true};
    case 'User_MyTrademark_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_MyTrademark_Details_Error':
      return {...state, isFetching: false};

    //Lapsed Renewal Details
    case 'User_LapsedRenewal_Details_Request':
      return {...state, isFetching: true};
    case 'User_LapsedRenewal_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_LapsedRenewal_Details_Error':
      return {...state, isFetching: false};

    //ApplicationStatus Details
    case 'User_ApplicationStatus_Details_Request':
      return {...state, isFetching: true};
    case 'User_ApplicationStatus_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_ApplicationStatus_Details_Error':
      return {...state, isFetching: false};

    //Proprieter Details
    case 'User_Proprieter_Details_Request':
      return {...state, isFetching: true};
    case 'User_Proprieter_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_Proprieter_Details_Error':
      return {...state, isFetching: false};

    //Opposition Details
    case 'User_Opposition_Details_Request':
      return {...state, isFetching: true};
    case 'User_Opposition_Details_Success':
      return {...state, isFetching: false, RegisteredDetails: action.payload};
    case 'User_Opposition_Details_Error':
      return {...state, isFetching: false};

//Dashboard Details
case 'User_Dashboard_Request':
  return {...state, isFetching: true};
case 'User_Dashboard_Success':
  return {...state, isFetching: false, DashboardDetails: action.payload};
case 'User_Dashboard_Error':
  return {...state, isFetching: false};

  //Country Details
  case 'User_Country_Request':
  return {...state, isFetching: true};
case 'User_Country_Success':
  return {...state, isFetching: false, CountryName: action.payload};
case 'User_Country_Error':
  return {...state, isFetching: false};

   //Country Details
   case 'User_State_Request':
    return {...state, isFetching: true};
  case 'User_State_Success':
    return {...state, isFetching: false, stateName: action.payload};
  case 'User_State_Error':
    return {...state, isFetching: false};
  
    default:
      return state;
  }
};
