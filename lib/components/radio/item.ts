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
