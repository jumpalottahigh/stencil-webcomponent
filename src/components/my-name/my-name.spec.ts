import { flush, render } from '@stencil/core/testing'
import { MyName } from './my-name'

describe('my-name', () => {
  it('should build', () => {
    expect(new MyName()).toBeTruthy()
  })

  describe('rendering', () => {
    let element
    beforeEach(async () => {
      element = await render({
        components: [MyName],
        html: '<my-name></my-name>'
      })
    })

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('Hello, my name is  ')
    })

    it('should work with a fullname', async () => {
      element.fullname = 'Georgi Yanev'
      await flush(element)
      expect(element.textContent).toEqual('Hello, my name is Georgi Yanev')
    })
  })
})
