import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header/Header';
import Speech from './component/Speech/Speech';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Speech />, document.getElementById('speech'));
registerServiceWorker();
