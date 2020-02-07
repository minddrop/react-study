import { JSObject } from '../types/Common'

import { ApiClient } from './index'

const VOLUME_PATH = './volumes'
const baseURL = 'https://www.googleapis.com/books/v1'
const apiClient = new ApiClient(baseURL)

export class VolumeApi {
  static get(params: JSObject): Promise<{}> {
    return apiClient.get(VOLUME_PATH, params)
  }
}
