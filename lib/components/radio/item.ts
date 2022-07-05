Component({
  options: {
    virtualHost: true
  },

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

  observers: {
    checked(value) {
      this.setData({
        classes: [
          'radio-item',
          value ? 'item-checked' : null
        ].filter(x => x).join(' ')
      })
    }
  },

  relations: {
    './group': {
      type: 'parent'
    }
  },

  methods: {
    onTap() {
      if (this.currentlyChecked()) {
        return
      }

      this.triggerEvent('change', {
        value: this.data.value
      }, {
        bubbles: true
      })
    },

    currentlyChecked() {
      return this.data.checked
    }
  }
})
