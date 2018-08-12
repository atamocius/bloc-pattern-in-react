import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { Button, Label } from 'semantic-ui-react';

const MobXCounter = ({ store }) => (
  <Fragment>
    <Button onClick={() => store.increment()}>+</Button>
    <Button onClick={() => store.decrement()}>-</Button>
    <Label size="large" color="orange">
      Count:
      <Label.Detail>{store.counter}</Label.Detail>
    </Label>
  </Fragment>
);

export default observer(MobXCounter);
