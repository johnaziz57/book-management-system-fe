import axios, { Axios } from 'axios'
import type { App } from 'vue'
import { InjectionKey } from 'vue'

interface AxiosOptions {
  baseUrl: string
}

export const AxiosKey: InjectionKey<Axios> = Symbol('Axios')

export default {
  install: (app: App, options: AxiosOptions) => {
    const axiosInstance = axios.create({
      baseURL: options.baseUrl,
    })
    app.provide(AxiosKey, axiosInstance)
  },
}
