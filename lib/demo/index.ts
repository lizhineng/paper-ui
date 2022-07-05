Page({
  toDemo(e: WechatMiniprogram.CustomEvent) {
    const { demo } = e.target.dataset

    if (demo) {
      wx.navigateTo({
        url: `/demo/${demo}/index`
      })
    }
  }
})