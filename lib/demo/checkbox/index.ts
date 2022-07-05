interface Item {
  label: string,
  value: string,
  checked: boolean
}

Page({
  data: {
    items1: <Item[]> [
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
    ],
    items2: <Item[]> [
      {
        label: 'Item 1',
        value: 'item-1',
        checked: false
      },
      {
        label: 'Item 2',
        value: 'item-2',
        checked: false
      },
      {
        label: 'Item 3',
        value: 'item-3',
        checked: true
      }
    ]
  },

  onChange1(e: WechatMiniprogram.CustomEvent) {
    const { value } = e.detail

    this.setData({
      items1: this.data.items1.map((item: Item) => {
        item.checked = value.includes(item.value)

        return item
      })
    })
  },

  onChange2(e: WechatMiniprogram.CustomEvent) {
    const { value } = e.detail

    this.setData({
      items2: this.data.items2.map((item: Item) => {
        item.checked = value.includes(item.value)

        return item
      })
    })
  }
})