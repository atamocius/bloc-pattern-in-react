import { Component } from 'react';

class ConnectionState {
  none = 0;
  waiting = 1;
  active = 2;
  done = 3;
}

class AsyncSnapshot {
  constructor(connectionState, data, error) {
    this._connectionState = connectionState;
    this._data = data;
    this._error = error;
    this._hasData = data ? true : false;
    this._hasError = error ? true : false;
  }

  get connectionState() {
    return this._connectionState;
  }

  get data() {
    return this._data;
  }

  get error() {
    return this._error;
  }

  get hasData() {
    return this._hasData;
  }

  get hasError() {
    return this._hasError;
  }
}

class StreamBuilder extends Component {
  constructor(props) {
    super(props);

    const { initialData, stream } = props;

    this.state = {
      /**
       * @type {AsyncSnapshot}
       */
      snapshot: new AsyncSnapshot(ConnectionState.waiting, initialData),
    };

    stream.subscribe(
      data => {
        this.setState({
          snapshot: new AsyncSnapshot(ConnectionState.active, data, null),
        });
      },
      error => {
        this.setState({
          snapshot: new AsyncSnapshot(ConnectionState.active, null, error),
        });
      },
      () => {
        this.setState({
          snapshot: new AsyncSnapshot(ConnectionState.done, null, null),
        });
      }
    );
  }

  render() {
    return this.props.builder(this.state.snapshot);
  }
}

export default StreamBuilder;
