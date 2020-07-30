import { combineReducers } from 'redux';
import Auth from './Auth';
import CRDetail from './CRDetail';
import DDetail from './DDetail';
import TMApi from './TMApi';
export default combineReducers({
  Auth,
  CRDetail,
  DDetail,
  TMApi
})