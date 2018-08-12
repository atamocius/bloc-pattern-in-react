import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

export default class CounterBloc {
  constructor() {
    // Sink & Stream
    // - Similar to Dart's StreamController
    // - A Subject is both an observer and an observable
    this._subject = new Subject();
  }

  // Sink (Observer)
  // get increment() {
  //   return this._subject;
  // }

  // Stream (Observable)
  get counter() {
    return this._subject.pipe(scan((count, v) => count + v, 0));
  }

  increment() {
    this._subject.next(1);
  }

  decrement() {
    this._subject.next(-1);
  }

  dispose() {
    this._subject.complete();
  }
}
