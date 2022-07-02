Component({
  properties: {
    value: {
      type: String,
      optionalTypes: [Number]
    },
    checked: {
      type: Boolean,
      value: false
    }
  },

  data: {
    classes: 'checkbox-item'
  },

  observers: {
    checked(value) {
      this.setData({
        classes: [
          'checkbox-item',
          value ? 'item-checked' : null
        ].filter(x => x).join(' ')
      })
    }
  },

  methods: {
    onTap() {
      this.triggerEvent('change', {
        value: this.data.value
      }, {
        bubbles: true
      })
    }
  }
})
