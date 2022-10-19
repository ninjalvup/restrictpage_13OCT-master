// import axios from 'axios';
// last update 9/9/22 tbs api works only with forwrder service
import { tbs_baseURL } from './tbsapi';

export default {
getOTP(tel){
    console.log('getOTPXX '+tel)
    const options = {
        method: 'POST',
        body: new URLSearchParams({
          key: '1741237395252078',
          secret: 'ea28f2c3cf8222077a7ed1a88378e7dc',
          msisdn: tel
        })
      };

      fetch("https://api.scraperapi.com?api_key=e658a301f700508ebcc3fbdf3ca56ee1&url="+tbs_baseURL+'/request', options)
      // .then(response =>{ console.log(response)})
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            sessionStorage.setItem('objectGreeting', JSON.stringify(json));
        })
        // .then(response => console.log(response))
        .catch(err => console.error(err));

},

verifyOTP(token, code)
{
    // console.log(token)
    // console.log(code)
    const options = {
        method: 'POST',
        body: new URLSearchParams({
          key: '1741237395252078',
          secret: 'ea28f2c3cf8222077a7ed1a88378e7dc',
          token: token,
          pin: code
        })
      };
    //   console.log(options)
      
      fetch("https://api.scraperapi.com?api_key=e658a301f700508ebcc3fbdf3ca56ee1&url="+tbs_baseURL+'/verify', options)
        .then(response => response.json())
        .then(json =>{

            console.log(json)
            sessionStorage.setItem('verifyObject', JSON.stringify(json));
        })
        // .then(response => console.log(response))
        .catch(err => console.error(err));
}

}

