import { NodeField } from './node.field'
import { GlobalID } from '../id'

class NodeFieldResolver extends NodeField {}

describe('NodeField', () => {
  let resolver = new NodeFieldResolver()

  describe('resolveNode', () => {
    describe('when not overridden', () => {
      it('should throw an error', async () => {
        const globalId = new GlobalID('Type', 1)
        try {
          resolver.resolveNode(globalId)
        } catch (error) {
          expect(error).toEqual(new Error('Method not implemented.'))
        }
      })
    })
  })
})
