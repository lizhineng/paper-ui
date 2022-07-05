Component({
  properties: {
    type: {
      type: String,
      value: 'secondary'
    },
    size: {
      type: String,
      value: 'md'
    },
    pill: {
      type: Boolean,
      value: false
    },
    block: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },

  data: {
    classes: 'btn btn-md'
  },

  observers: {
    'size, pill, block'(size, pill, block) {
      this.setData({
        classes: [
          'btn',
          size ? 'btn-' + size : null,
          pill ? 'btn-pill' : null,
          block ? 'btn-block' : null
        ].filter(x => x).join(' ')
      })
    }
  }
})
