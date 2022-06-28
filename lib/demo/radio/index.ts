Page({
  data: {
    items: [
      {
        label: 'Item 1',
        value: 'item-1'
      },
      {
        label: 'Item 2',
        value: 'item-2'
      },
      {
        label: 'Item 3',
        value: 'item-3'
      },
      {
        label: 'Item 4',
        value: 'item-4'
      }
    ],
    currentIndex: 5,
    value: 'item-2',
  },

  onChange(e: WechatMiniprogram.CustomEvent<{
    value: string
  }>) {
    const { value } = e.detail

    this.setData({ value })
  },

  addItem() {
    const { currentIndex } = this.data

    this.setData({
      items: [...this.data.items, {
        label: 'Item ' + currentIndex,
        value: 'item-' + currentIndex
      }],
      currentIndex: currentIndex + 1
    })
  }
})