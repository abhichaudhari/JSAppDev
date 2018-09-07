import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Routes from './components/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();