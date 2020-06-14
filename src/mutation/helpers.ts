const INPUT_SUFFIX = 'Input'
const PAYLOAD_SUFFIX = 'Payload'

const capitalise = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1)

export const getInputName = (mutationName: string): string =>
  capitalise(mutationName) + INPUT_SUFFIX

export const getPayloadName = (mutationName: string): string =>
  capitalise(mutationName) + PAYLOAD_SUFFIX

export const getClientMutationId = (args: any[]): string => {
  const relayArgIndex = args.findIndex(arg => arg['clientMutationId'])
  return args[relayArgIndex].clientMutationId || null
}
