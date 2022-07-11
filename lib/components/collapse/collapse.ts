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

      this.setData({ display: ! display })
    }
  }
})
