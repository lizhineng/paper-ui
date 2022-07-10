Component({
  options: {
    multipleSlots: true
  },

  data: {
    display: false
  },

  methods: {
    toggle() {
      const { display } = this.data

      this.setData({ display: ! display })
    }
  }
})
