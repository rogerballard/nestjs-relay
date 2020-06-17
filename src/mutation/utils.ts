export const getClientMutationId = (args: any[]): string => {
  const relayArgIndex = args.findIndex(arg => arg['clientMutationId']);
  return args[relayArgIndex].clientMutationId || null;
};

export const capitalise = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);
