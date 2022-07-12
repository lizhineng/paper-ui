Component({
  options: {
    multipleSlots: true
  },

  properties: {
    display: {
      type: Boolean,
      value: true
    }
  },

  data: {
    display: true
  },

  methods: {
    toggle() {
      const { display } = this.data
      const value = ! display

      this.setData({ display: value })

      this.triggerEvent('collapse', {
        value
      })
    }
  }
})
