// // request get 请求
// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//       wx.request({
//         url: url,
//         method: 'GET',
//         data: {},
//         success (res) {
//           console.log('from api')
//           console.log(res)
//           resolve(res.data.data)
//         },
//         fail (err) {
//           console.log(err)
//           reject(err)
//         }
//       })
//     })
//   }

//   // request post 请求
// const postData = (url, param) => {
//     return new Promise((resolve, reject) => {
//       wx.request({
//         url: url,
//         method: 'POST',
//         data: param,
//         success (res) {
//           console.log(res)
//           resolve(res.data)
//         },
//         fail (err) {
//           console.log(err)
//           reject(err)
//         }
//       })
//     })
//   }

//   module.exports = {
//     getData,
//     postData
//   }
// import wepy from 'wepy'
// var appUrl = wepy.$instance.globalData.appUrl
// var appUrl = 'http://192.168.3.15:8081/'
// const wxRequest = (url, params = {}) => {
//   let res = wepy.request({
//     url: appUrl + url, //开发者服务器接口地址",
//     data: 'data', //请求的参数",
//     method: params.que,
//     dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
//     success: res => {},
//     fail: () => {},
//     complete: () => {}
//   });

// }
