// import axios from 'axios';
// import { baseURL } from './api';
// export default {
// setAccessMenu(menu, role) {
//   let getBody = JSON.parse(menu)
//   const body = {menu: JSON.stringify(getBody.menu),role: role};
// // console.log('menu: ',JSON.stringify(getBody.menu))
// // console.log('role: ',menu)
// return axios
// .post(baseURL + '/access/set-access-menu', body ,{
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + localStorage.getItem("access_token"),
//   }
// },).then(response => response.data);
// },

// updateAccessMenu(menu, role) {
//   let getBody = JSON.parse(menu)
//   const body = {menu: JSON.stringify(getBody.menu),role: role};
//   // console.log('setAccessMenu: ',role, menu)
//   return axios
//   .post(baseURL + '/access/update-access-menu', body ,{
// headers: {
// "Content-Type": "application/json",
// Authorization: "Bearer " + localStorage.getItem("access_token"),
// }
// },)
// .then(response => response.data);
// },

// getAccessMenu(role) {
//   console.log('in getAccessMenu', role)
//   // const json = `{"role": "${role}"}`;
//   // const obj = JSON.parse(json)
//   return axios.request({
//     method:'GET',
//     url: baseURL + '/access/get-access-menu',
//     params:{
//       role:role
//     },
//   }).then(response => response.data);
// },



// getRole() {

// return axios
// .get(baseURL + '/access/get-all-role', {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + localStorage.getItem("access_token"),
//   }},)
//   // .then(response => {console.log('getRole2: ') 
//   // console.log(response.data)}); //getAllRole Array [3]
// .then(response => response.data);
// },
// }; 

import axios from 'axios';
import { baseURL } from './api';
export default {
  setAccessMenu(menu, role) {
    let getBody = JSON.parse(menu)
    const body = {menu: JSON.stringify(getBody.menu),role: role};
    // console.log('menu: ',JSON.stringify(getBody.menu))
    // console.log('role: ',menu)
    return axios
      .post(baseURL + '/access/set-access-menu', body ,{
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        }

      },)
      .then(response => response.data);
  },
  updateAccessMenu(menu, role) {
    let getBody = JSON.parse(menu)
    const body = {menu: JSON.stringify(getBody.menu),role: role};
    // console.log('setAccessMenu: ',role, menu)
    return axios
      .post(baseURL + '/access/update-access-menu', body ,{
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        }

      },)
      .then(response => response.data);
  },
  getAccessMenu(role) {
    return axios.request({
        method: 'GET',
        url: baseURL + '/access/get-access-menu',
        params: {
          role: role
        },
      
      })
      .then(response => response.data);
  },
  getRole() {
    return axios.request({
      method: 'GET',
      url: baseURL + '/access/get-all-role',
    })
    .then(response => response.data);
    // return axios
    //   .get(baseURL + '/access/get-all-role', {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + localStorage.getItem("access_token"),
    //     }

    //   },)
    //   .then(response => response.data);
  },
};