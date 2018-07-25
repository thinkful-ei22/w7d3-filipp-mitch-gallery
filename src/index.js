import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gallery from './components/gallery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Gallery />, document.getElementById('root'));
registerServiceWorker();
