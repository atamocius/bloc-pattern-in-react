import { observable, action, computed, decorate } from 'mobx';

class CounterStore {
  constructor() {
    this._count = 0;
  }

  get counter() {
    return this._count;
  }

  increment() {
    this._count++;
  }

  decrement() {
    this._count--;
  }
}

export default decorate(CounterStore, {
  _count: observable,
  counter: computed,
  increment: action,
  decrement: action,
});
