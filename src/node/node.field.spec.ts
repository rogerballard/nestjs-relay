import { NodeFieldsDefinition } from './node.field'

class NodeFieldResolver extends NodeFieldsDefinition {}

describe('NodeField', () => {
  let resolver = new NodeFieldResolver()

  describe('resolveNode', () => {
    describe('when not overridden', () => {
      it('should throw an error', async () => {
        const globalId = { type: 'Type', id: '1' }
        try {
          resolver.resolveNode(globalId)
        } catch (error) {
          expect(error).toEqual(new Error('Method not implemented.'))
        }
      })
    })
  })
})
