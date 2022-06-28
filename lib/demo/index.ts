Page({
  toDemo(e: WechatMiniprogram.CustomEvent) {
    const { demo } = e.currentTarget.dataset

    if (demo) {
      wx.navigateTo({
        url: `/demo/${demo}/index`
      })
    }
  }
})