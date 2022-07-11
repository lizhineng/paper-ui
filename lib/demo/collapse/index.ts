Page({
  toggle(e: WechatMiniprogram.TouchEvent) {
    const { collapseTarget } = e.currentTarget.dataset

    const collapse = this.selectComponent(collapseTarget)

    collapse?.toggle()
  }
})