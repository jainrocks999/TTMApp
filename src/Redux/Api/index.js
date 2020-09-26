import axios from 'axios';
import Constants from '../Constants';

export default class Api {
  static fetchDataByPOST = async (url, data, token) => {
    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          Authorization: 'bearer ' + token,
        },
        url: Constants.MainUrl + url,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchDataByGET = async (url, token) => {
    console.log('Api roll' + url);
    console.log('Aoi roll' + token);
    console.log('Aoi Roll' + Constants.MainUrl + url);
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          Authorization: 'bearer ' + token,
        },
        url: Constants.MainUrl + url,
      });
      return response.data;
    } catch (error) {
      console.log('érror' +JSON.stringify(error));
      throw error;
    }
  };
}
