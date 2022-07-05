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

  relations: {
    './group': {
      type: 'parent'
    }
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
      this.triggerEvent('item-change', {
        value: this.data.value
      }, {
        bubbles: true,
        composed: true
      })
    }
  }
})
