const path = require('node:path')
const simulate = require('miniprogram-simulate')

test('radio components can be rendered', () => {
  const id = simulate.load({
    template: `
      <view>
        <radio-group>
          <radio-item value="item-1">Item 1</radio-item>
          <radio-item value="item-2" checked>Item 2</radio-item>
          <radio-item value="item-3">Item 3</radio-item>
        </radio-group>
      </view>
    `,
    usingComponents: {
      'radio-group': simulate.load(path.resolve(__dirname, '../group')),
      'radio-item': simulate.load(path.resolve(__dirname, '../item')),
    }
  })

  simulate.render(id)
})
