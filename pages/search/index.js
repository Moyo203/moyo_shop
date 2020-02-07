import { request } from "../../request/request.js"
// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"",
    goods_list:[],
    goodd:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleInputChange:function(e){
    console.log(e.detail.value);
    this.setData({
      inputVal:e.detail.value
    })
  },
  handleSearch:async function(e){
    const {inputVal} = this.data;
    console.log(inputVal);
    if(!inputVal){
      wx.showToast({
        title: '输入商品名称不能为空',
        icon:'none'
      })
      return false;
    }
    const goods_list = await request({
      url:"/goods/search",
      data:{
        query:inputVal
      }
    })
    if(goods_list.length === 0){
      wx.showToast({
        title: '查无数据',
        icon:'none'
      })
    }
    this.setData({
      goods_list,
      goodd : goods_list.data.message.goods
    })
    const goodd = goods_list.data.message.goods
    console.log(goods_list)
    console.log(goodd)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})