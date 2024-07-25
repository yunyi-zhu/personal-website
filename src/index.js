import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
	<Router basename={process.env.PUBLIC_URL}>
		<App />
	</Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
