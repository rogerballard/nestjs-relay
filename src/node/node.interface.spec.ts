import {
  NodeInterface,
  returnsNodeInterface,
  returnsNodeInterfaces,
  typeNodeInterface,
  typeNodeInterfaces,
} from './node.interface';

describe('NodeInterface', () => {
  describe('typeNodeInterface', () => {
    it('should return the NodeInterface class', () => {
      expect(typeNodeInterface()).toEqual(NodeInterface);
    });
  });

  describe('typeNodeInterfaces', () => {
    it('should return an array of the NodeInterface class', () => {
      expect(typeNodeInterfaces()).toEqual([NodeInterface]);
    });
  });

  describe('returnsNodeInterface', () => {
    it('should return the NodeInterface class', () => {
      expect(returnsNodeInterface()).toEqual(NodeInterface);
    });
  });

  describe('returnsNodeInterfaces', () => {
    it('should return an array of the NodeInterface class', () => {
      expect(returnsNodeInterfaces()).toEqual([NodeInterface]);
    });
  });
});
