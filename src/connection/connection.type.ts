import * as Relay from 'graphql-relay';

export type Connection<T> = Relay.Connection<T | undefined>;
