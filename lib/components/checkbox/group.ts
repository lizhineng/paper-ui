Component({
  data: {
    value: []
  },

  relations: {
    './item': {
      type: 'child',
      linked(item) {
        if (item.data.checked) {
          this.setData({
            value: [...this.data.value, item.data.value]
          })
        }
      }
    }
  },

  methods: {
    async onChange(e: WechatMiniprogram.CustomEvent<{
      value: string | number
    }>) {
      const { value } = e.detail

      await this.toggle(value)

      this.triggerEvent('change', {
        value: this.data.value
      })
    },

    has(value) {
      return this.data.value.includes(value)
    },

    async toggle(value) {
      if (this.has(value)) {
        return (await this.remove(value))
      }
      
      return (await this.add(value))
    },

    async add(value) {
      await this.setData({
        value: [...this.data.value, value]
      })

      return true
    },

    async remove(value) {
      const index = this.data.value.indexOf(value)
      const data = [...this.data.value]

      if (index === -1) {
        return false
      }

      data.splice(index, 1)

      await this.setData({
        value: data
      })

      return true
    }
  }
})
