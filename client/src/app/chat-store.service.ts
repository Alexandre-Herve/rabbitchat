import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Store, BaseState } from './store'

export interface Chat {
  name: string
}

const initialState: BaseState<Chat> = {
  singleItems: {},
  listItems: { type: 'NotAsked' } 
}

@Injectable()
export class ChatStoreService extends Store<Chat> {
  constructor() {
    super(initialState)
  }
}
