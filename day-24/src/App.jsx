import React, { useReducer } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './store';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
	return (
		<UserProvider>
			<div className='App'>
				<Router>
					<Nav />
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/profile' component={Profile} />
					<Route path='/dashboard' component={Dashboard} />
				</Router>
			</div>
		</UserProvider>
	);
}

export default App;
