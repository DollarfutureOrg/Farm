export enum SettingsType {
  'IFO' = 'IFO',
  'POOL' = 'POOL',
  'DLFM' = 'DLFM',
}

export interface SettingsObject {
  name: string
  url: string
  type: SettingsType
}
