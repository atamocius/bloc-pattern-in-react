import React, { Component, Fragment } from 'react';
import { Button, Label } from 'semantic-ui-react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <Fragment>
        <Button onClick={() => this._increment()}>+</Button>
        <Button onClick={() => this._decrement()}>-</Button>
        <Label size="large" color="red">
          Count:
          <Label.Detail>{this.state.count}</Label.Detail>
        </Label>
      </Fragment>
    );
  }

  _increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  _decrement() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      };
    });
  }
}

export default Counter;
