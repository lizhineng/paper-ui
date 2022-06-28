const path = require('node:path')
const simulate = require('miniprogram-simulate')

test('checkbox components can be rendered', () => {
  const id = simulate.load({
    template: `
      <view>
        <checkbox-group>
          <checkbox-item value="item-1">Item 1</checkbox-item>
          <checkbox-item value="item-2" checked>Item 2</checkbox-item>
          <checkbox-item value="item-3" checked>Item 3</checkbox-item>
        </checkbox-group>
      </view>
    `,
    usingComponents: {
      'checkbox-group': simulate.load(path.resolve(__dirname, '../group')),
      'checkbox-item': simulate.load(path.resolve(__dirname, '../item')),
    }
  })

  simulate.render(id)
})
