export const getClientMutationId = (args: any[]): string => {
  const relayArgIndex = args.findIndex((arg) => arg['clientMutationId']);
  return args[relayArgIndex]?.clientMutationId || null;
};
