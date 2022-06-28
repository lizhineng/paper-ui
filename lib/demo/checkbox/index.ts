Page({
  data: {
    items: [
      {
        label: 'Item 1',
        value: 'item-1',
        checked: false
      },
      {
        label: 'Item 2',
        value: 'item-2',
        checked: true
      },
      {
        label: 'Item 3',
        value: 'item-3',
        checked: true
      }
    ]
  },

  onChange(e: WechatMiniprogram.CustomEvent<{
    value: []
  }>) {
    const { value } = e.detail

    this.setData({
      items: [
        ...this.data.items.map(item => {
          if (item.value === value) {
            item.checked = ! item.checked
          }

          return item
        })
      ]
    })
  }
})