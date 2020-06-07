import { returnsNode, typeNode, Node } from './node.interface'

describe('NodeInterface', () => {
  describe('typeNode', () => {
    it('should return the Node class', () => {
      expect(typeNode()).toBe(Node)
    })
  })
  describe('returnsNode', () => {
    it('should return the Node class', () => {
      expect(returnsNode()).toBe(Node)
    })
  })
})
