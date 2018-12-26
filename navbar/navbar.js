// components/navbar/navbar.js
const navbarHeight = 48;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Object,
      value: {
        title: '',
        showCapsule: true,
        back: {
          isShow: true,
          path: ''
        },
        home: {
          isShow: true,
          path: ''
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: navbarHeight,
    statusHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateBack: function() {
      let path = this.properties.options.back.path;
      if(path) {
        wx.navigateTo({
          url: path,
          success: function() {
            console.log(`success to ${path}`);
          },
          fail: function(err) {
            console.log(`fail to ${path},${err}`)
          }
        })
      } else {
        wx.navigateBack();
      }
    },

    navigateHome: function() {
      let _this = this;
      wx.reLaunch({
        url: _this.properties.options.home.path
      })
    }
  },

  attached: function() {
    let info = wx.getSystemInfoSync()
    this.setData({
      statusHeight: info.statusBarHeight
    })
  }
})
