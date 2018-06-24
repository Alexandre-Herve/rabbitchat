import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { WebData } from './web-data';

export interface ItemsDictionnary<T> {
  [key: number]: WebData<T>
}

export interface BaseState<T> {
  singleItems: ItemsDictionnary<T>
  listItems: WebData<T[]>
}

export class Store<T, S extends BaseState<T> = BaseState<T>> {

  private _state: BehaviorSubject<S>
  public state: Observable<S>

  constructor(initialState: S) {
    this._state = <BehaviorSubject<S>> new BehaviorSubject(initialState)
    this.state = this._state.asObservable()
  }

  /*
   * ======
   * Item
   * ======
   */

  getItem(id: number): WebData<T> {
    const state = this._state.getValue()
    return state.singleItems[id] || { type: 'NotAsked' }
  }

  setItem(id: number, data: WebData<T>): void {
    const state = this._state.getValue()
    state.singleItems[id] = data
    this._state.next(state)
  }

  removeItem(id: number): void {
    const state = this._state.getValue()
    delete state.singleItems[id]
    this._state.next(state)
  }

  /*
   * ======
   * List
   * ======
   */

  getList(): WebData<T[]> {
    return this._state.getValue().listItems
  }

  setList(data: WebData<T[]>): void {
    const state = this._state.getValue()
    state.listItems = data
    this._state.next(state)
  }

  removeList(): void {
    this.setList({ type: 'NotAsked' })
  }
}
