import 'reflect-metadata';
import { MetadataStorage } from './metadata-storage.class';

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
}

describe('MetadataStorage', () => {
  describe('addMethodMetadata', () => {
    it('should add and fetch method metadata', () => {
      MetadataStorage.addMethodMetadata({
        target: Calculator as any,
        key: 'add',
        paramIndex: 0,
        defaultValue: 1,
        description: 'The first value',
        typeFunc: () => Number,
      });

      const metadata = MetadataStorage.getMethodMetadata({
        target: Calculator as any,
        key: 'add',
      });

      expect(metadata).toBeInstanceOf(Array);
      expect(metadata[0].paramIndex).toBe(0);
      expect(metadata[0].defaultValue).toBe(1);
      expect(metadata[0].description).toBe('The first value');
      expect(metadata[0].typeFunc).toBeInstanceOf(Function);
      expect(metadata[0].typeFunc()).toBe(Number);
    });
  });
});
