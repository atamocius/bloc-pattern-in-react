import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import Counter from './components/Counter';
import MobXCounter from './components/MobXCounter';
import RxCounter from './components/RxCounter';
import BlocCounter from './components/BlocCounter';

import CounterStore from './stores/CounterStore';
import CounterBloc from './stores/CounterBloc';

const store = new CounterStore();
const bloc = new CounterBloc();

class App extends Component {
  componentWillUnmount() {
    bloc.dispose();
  }

  render() {
    return (
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1">Counter Demo</Header>

        <Header as="h2">Using State</Header>
        <Counter />

        <Header as="h2">Using MobX</Header>
        <MobXCounter store={store} />

        <Header as="h2">Using RxJS</Header>
        <RxCounter />

        <Header as="h2">Using BLoC Pattern</Header>
        <BlocCounter bloc={bloc} />
      </Container>
    );
  }
}

export default App;
