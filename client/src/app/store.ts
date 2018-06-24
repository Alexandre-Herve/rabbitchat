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

  private stateData: S 
  private _state: BehaviorSubject<S>

  public state: Observable<S>

  constructor(initialState: S) {
    this.stateData = initialState
    this._state = <BehaviorSubject<S>> new BehaviorSubject(this.stateData)
    this.state = this._state.asObservable()
  }

  /*
   * ======
   * Item
   * ======
   */

  getItem(id: number): WebData<T> {
    return this.stateData.singleItems[id] || { type: 'NotAsked' }
  }

  setItem(id: number, data: WebData<T>): void {
    this.stateData.singleItems[id] = data
    this._state.next(this.stateData)
  }

  removeItem(id: number): void {
    delete this.stateData[id]
    this._state.next(this.stateData)
  }

  /*
   * ======
   * List
   * ======
   */

  getList(): WebData<T[]> {
    return this.stateData.listItems
  }

  setList(data: WebData<T[]>): void {
    this.stateData.listItems = data
    this._state.next(this.stateData)
  }

  removeList(): void {
    this.setList({ type: 'NotAsked' })
  }
}
