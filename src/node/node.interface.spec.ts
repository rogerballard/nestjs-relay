import { returnsNode, typeNode, Node, typeNodes, returnsNodes } from './node.interface';

describe('NodeInterface', () => {
  describe('typeNode', () => {
    it('should return the Node class', () => {
      expect(typeNode()).toEqual(Node);
    });
  });
  describe('typeNodes', () => {
    it('should return an array of the Node class', () => {
      expect(typeNodes()).toEqual([Node]);
    });
  });
  describe('returnsNode', () => {
    it('should return the Node class', () => {
      expect(returnsNode()).toEqual(Node);
    });
  });
  describe('returnsNodes', () => {
    it('should return an array of the Node class', () => {
      expect(returnsNodes()).toEqual([Node]);
    });
  });
});
