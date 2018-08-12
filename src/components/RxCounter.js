import React, { Component, Fragment } from 'react';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Button, Label } from 'semantic-ui-react';

class RxCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this._subject = new Subject();

    this._subject.pipe(scan(count => count + 1, 0)).subscribe(count => {
      this.setState({
        count,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Button onClick={() => this._subject.next()}>+</Button>
        <Label size="large" color="yellow">
          Count:
          <Label.Detail>{this.state.count}</Label.Detail>
        </Label>
      </Fragment>
    );
  }
}

export default RxCounter;
