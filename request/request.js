import { BASE_URL } from "./url.js"
export const request = (params) => {

  // 添加请求前后的遮罩 
  wx.showLoading({
    title: '正在加载中....',
    mask: true
  })
  return new Promise(function (resolve, reject) {
    wx.request({
      url: BASE_URL + params.url,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  })
}