export interface NotAsked { type: 'NotAsked' }
export interface Loading { type: 'Loading' }
export interface Success<T> { type: 'Success'; data: T }
export interface Err { type: 'Err'; status: number; message: string }

export type WebData<T> = NotAsked | Loading | Success<T> | Err
