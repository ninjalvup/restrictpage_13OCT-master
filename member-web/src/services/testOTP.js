
require('dotenv').config()
export default{
  
  
  getOTP(tel){

    const accountSid = '1741237395252078';
    const authToken = 'ea28f2c3cf8222077a7ed1a88378e7dc';

    const thaibulksmsApi = require('thaibulksms-api')

    const options = {
      apiKey: accountSid,
      apiSecret: authToken,
    }

    const otp = thaibulksmsApi.otp(options)
    

    const requestOTP = async function (tel) {

      try {
          const response =  await otp.request(tel)
          const GetResponse = JSON.stringify(response.data);
          sessionStorage.setItem('objectGreeting', GetResponse);
          // console.log('from test OTP show GetResponse')
          // console.log(GetResponse)

      } catch (error) {
          console.error(error)
      }

    }
    requestOTP(tel)


},

  
verifyOTP(token, code){
  // console.log(code)
  // console.log(token)
  const accountSid = '1741237395252078';
  const authToken = 'ea28f2c3cf8222077a7ed1a88378e7dc';

  const thaibulksmsApi = require('thaibulksms-api')

  const options = {
    apiKey: accountSid,
    apiSecret: authToken,
  }

  const otp = thaibulksmsApi.otp(options)

  const verifyOTP = async (token, code) => {
    try {

      console.log('verifyOTP')
      const otpresponse = await otp.verify(token, code)
      const GetotpResponse = JSON.stringify(otpresponse.data);
      sessionStorage.setItem('verifyObject', GetotpResponse);
      console.log(otpresponse)
      console.log(GetotpResponse)
    }
    catch (error) {
      console.log('is error - js')
      const sampleObj = {
        "status": "not success",
        "message": 400}
      
      const GetotpResponse = JSON.stringify(sampleObj);
      sessionStorage.setItem('verifyObject', GetotpResponse);

      

      // console.error(error)
    }

}
verifyOTP(token, code)
},
}