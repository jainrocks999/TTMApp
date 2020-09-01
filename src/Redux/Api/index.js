import axios from 'axios';
import Constants from '../Constants';


export default class Api {

    static fetchDataByPOST=async(url,data,token)=>{
        console.log("data"+url +data +token);
        try {
            const response=await axios({
                method:'POST',
                headers:{ 
                'content-type': 'application/json',
                'Accept': 'application/json',
                 'Authorization': 'bearer ' + token},
                url: Constants.MainUrl+url,
                data
            })
           return response.data
        } catch (error) {
            throw error
        }
    }
  
    static fetchDataByGET=async(url,token)=>{
        console.log('jjjjjjjj'+ Constants.MainUrl + url)
        console.log('jjjjjjjj'+token)
      try {
        const response=await axios({
            method:'GET',
             headers: {
                'Authorization': 'bearer ' + token
            },
            url:Constants.MainUrl+url 
        })
        console.log('kakakakaka'+JSON.stringify(response))
         return response.data
      } catch (error) {
          throw error
      }
  }
  
  
  
  }