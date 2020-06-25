import { GraphQLSchema } from 'graphql';
import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory, Resolver } from '@nestjs/graphql';
import { NodeFieldResolver } from './node-field.resolver';
import { NodeInterface } from './node.interface';
import { ResolvedGlobalId } from './resolved-global-id.class';
import { GlobalIdScalar } from './global-id.scalar';

@Resolver(NodeInterface)
class NodeResolver extends NodeFieldResolver {}

describe('NodeField', () => {
  const resolver = new NodeResolver();

  describe('resolveNode', () => {
    describe('when not overridden', () => {
      it('should throw an error', async () => {
        const globalId = new ResolvedGlobalId({ type: 'Type', id: '1' });
        try {
          resolver.resolveNode(globalId);
        } catch (error) {
          expect(error).toEqual(new Error('Method not implemented.'));
        }
      });
    });
  });

  describe('schema', () => {
    let schema: GraphQLSchema;

    beforeAll(async () => {
      const app = await NestFactory.create(GraphQLSchemaBuilderModule);
      await app.init();

      const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
      schema = await gqlSchemaFactory.create([NodeFieldResolver], [GlobalIdScalar]);
    });

    it('should contain the `Node` interface type', () => {
      const nodeType = schema.getType('Node');
      expect(nodeType).toBeDefined();
    });

    it('should contain the `node` field on the `Query` type', () => {
      const queryType = schema.getQueryType();
      expect(queryType).toBeDefined();

      const nodeField = queryType?.getFields()['node'];
      expect(nodeField).toBeDefined();
    });

    it('should contain the `nodes` field on the `Query` type', () => {
      const queryType = schema.getQueryType();
      expect(queryType).toBeDefined();

      const nodesField = queryType?.getFields()['nodes'];
      expect(nodesField).toBeDefined();
    });
  });
});
