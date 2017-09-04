Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content=[
      {
        date: "Nov 12 2017",//数据绑定，页面{{变量}}访问
        title: "盱眙小龙虾",
        img: {
          avatar_image: "/images/avatar/3.jpg",
          post_img: "/images/posts/xlx.jpg",
          view_img:"/images/icon/view.png",
          chat_img:"/images/icon/chat.png",
        },
        img_condition: true,
        content: "皮皮虾在中国大陆地区的正式名称写作“虾蛄”，英文俗名为“Mantis Shrimp（螳螂虾）”，为节肢动物门，甲壳动物亚门，软甲纲，掠虾亚纲，口足目（这个亚纲下面就一个目）旗下物种的统",
        collect_num: "12",
        view_num: "44",
      },
      {
        date: "Nov 23 2017",//数据绑定，页面{{变量}}访问
        title: "日照皮皮虾",
        img: {
          avatar_image: "/images/avatar/2.jpg",
          post_img: "/images/posts/ppx.jpg",
          view_img: "/images/icon/view.png",
          chat_img: "/images/icon/chat.png",
        },
        img_condition: true,
        content: "皮皮虾在中国大陆地区的正式名称写作“虾蛄”，英文俗名为“Mantis Shrimp（螳螂虾）”，为节肢动物门，甲壳动物亚门，软甲纲，掠虾亚纲，口足目（这个亚纲下面就一个目）旗下物种的统",
        collect_num: "123",
        view_num: "444",
      }
    ];
    this.setData({post_content:post_content});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
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