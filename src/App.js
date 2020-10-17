import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';

function App() {
	return (
		<>
			<Router>
				<div className="app">
					<Switch>
						<Route>
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
