import { Component } from 'react';

class StreamBuilder extends Component {
  constructor(props) {
    super(props);

    const { initialData, stream } = props;

    this.state = {
      snapshot: initialData,
    };

    stream.subscribe(snapshot => {
      this.setState({
        snapshot,
      });
    });
  }

  render() {
    return this.props.builder(this.state.snapshot);
  }
}

export default StreamBuilder;
