import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';

import App from './App';

// MobX configuration
configure({ enforceActions: true });

ReactDOM.render(<App />, document.getElementById('root'));
