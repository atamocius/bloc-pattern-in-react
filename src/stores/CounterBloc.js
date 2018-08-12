import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

export default class CounterBloc {
  constructor() {
    this._subject = new Subject();
  }

  // Sink
  get increment() {
    return this._subject;
  }

  // Stream
  get counter() {
    return this._subject.pipe(scan(count => count + 1, 0));
  }
}
