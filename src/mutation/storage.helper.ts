import 'reflect-metadata'
import { ArgsOptions, ReturnTypeFunc } from '@nestjs/graphql'

export interface Parameter {
  target: Object
  key: string | symbol
}

export type ParamData = Omit<ArgsOptions, 'name' | 'nullable' | 'type'> & {
  typeFunc: ReturnTypeFunc
  paramIndex: number
}

const METADATA_KEY = 'relay:param-data'

export class Storage {
  static storeParamData(data: ParamData, param: Parameter): void {
    Reflect.defineMetadata(METADATA_KEY, data, param.target, param.key)
  }
  static fetchParamData(param: Parameter): ParamData {
    return Reflect.getMetadata(METADATA_KEY, param.target, param.key)
  }
}
