// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '初始化测试数据',
    userInfo:{}, //存放User信息
  },

// 跳转页面方法
tologs(){
  wx.reLaunch({
    url: '/pages/logs/logs',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //授权以后获取用户信息
    wx.getUserInfo({
      success: (res) => {
        //保存用户信息，关闭页面后信息还在
        this.setData({
          userInfo:res.userInfo
        })
      }
    })
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
  // 获取用户信息
  handleGetUserInfo(res){
    if(res.detail.userInfo){//允许
      //修改UserInfo的状态数据
      this.setData({
        userInfo:res.detail.userInfo
      })
    }
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