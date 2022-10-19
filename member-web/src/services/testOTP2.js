// import axios from 'axios';
import { tbs_baseURL } from './tbsapi';

export default {
getOTP(tel){
    // console.log('getOTP'+tel)
    const options = {
        method: 'POST',
        // mode:'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          key: '1741237395252078',
          secret: 'ea28f2c3cf8222077a7ed1a88378e7dc',
          msisdn: tel
        })
      };

      fetch(tbs_baseURL+'/request', options)
      // .then(response =>{ console.log(response)})
        .then(response => response.json())
        .then(json =>{
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
        // mode:'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',


        },
        body: new URLSearchParams({
          key: '1741237395252078',
          secret: 'ea28f2c3cf8222077a7ed1a88378e7dc',
          token: token,
          pin: code
        })
      };
    //   console.log(options)
      
      fetch(tbs_baseURL+'/verify', options)
        .then(response => response.json())
        .then(json =>{
            sessionStorage.setItem('verifyObject', JSON.stringify(json));
        })
        // .then(response => console.log(response))
        .catch(err => console.error(err));
}

}

