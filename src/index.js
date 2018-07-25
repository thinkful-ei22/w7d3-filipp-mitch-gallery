import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './components/gallery';
import registerServiceWorker from './registerServiceWorker';
import animals from './animals.json';

ReactDOM.render(<Gallery pictures={animals}/>, document.getElementById('root'));
registerServiceWorker();
