const INPUT_SUFFIX = 'Input';
const PAYLOAD_SUFFIX = 'Payload';

export const capitalise = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export const getInputName = (mutationName: string): string =>
  capitalise(mutationName) + INPUT_SUFFIX;

export const getClientMutationId = (args: any[]): string => {
  const relayArgIndex = args.findIndex(arg => arg['clientMutationId']);
  return args[relayArgIndex].clientMutationId || null;
};
