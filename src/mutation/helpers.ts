const PAYLOAD_SUFFIX = 'Payload'

const capitalise = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1)

export const getPayloadName = (mutationName: string): string =>
  capitalise(mutationName) + PAYLOAD_SUFFIX
