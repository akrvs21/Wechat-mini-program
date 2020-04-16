// request get 请求
const getData = (url) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'GET',
        data: {},
        success (res) {
          console.log('from api')
          console.log(res)
          resolve(res.data.data)
        },
        fail (err) {
          console.log(err)
          reject(err)
        }
      })
    })
  }

  // request post 请求
const postData = (url, param) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'POST',
        data: param,
        success (res) {
          console.log(res)
          resolve(res.data)
        },
        fail (err) {
          console.log(err)
          reject(err)
        }
      })
    })
  }

  module.exports = {
    getData,
    postData
  }