import React, { Fragment } from 'react';
import { Button, Label } from 'semantic-ui-react';

import StreamBuilder from '../utils/StreamBuilder';

const BlocCounter = ({ bloc }) => (
  <Fragment>
    <Button onClick={() => bloc.increment()}>+</Button>
    <Button onClick={() => bloc.decrement()}>-</Button>
    <Label size="large" color="olive">
      Count:
      <StreamBuilder
        initialData={0}
        stream={bloc.counter}
        builder={snapshot => <Label.Detail>{snapshot.data}</Label.Detail>}
      />
    </Label>
  </Fragment>
);

export default BlocCounter;
