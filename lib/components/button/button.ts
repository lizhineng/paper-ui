Component({
  properties: {
    type: {
      type: String,
      value: 'secondary'
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
    classes: 'btn'
  },

  observers: {
    'pill, block'(pill, block) {
      this.setData({
        classes: [
          'btn',
          pill ? 'btn-pill' : null,
          block ? 'btn-block' : null
        ].filter(x => x)
      })
    }
  }
})
