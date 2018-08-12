import React, { Fragment } from 'react';
import { Button, Label } from 'semantic-ui-react';

import StreamBuilder from '../utils/StreamBuilder';

const BlocCounter = ({ bloc }) => (
  <Fragment>
    <Button onClick={() => bloc.increment.next()}>+</Button>
    <StreamBuilder
      initialData={0}
      stream={bloc.counter}
      builder={snapshot => (
        <Label size="large" color="olive">
          Count:
          <Label.Detail>{snapshot}</Label.Detail>
        </Label>
      )}
    />
  </Fragment>
);

export default BlocCounter;
