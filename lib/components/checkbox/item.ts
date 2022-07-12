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
