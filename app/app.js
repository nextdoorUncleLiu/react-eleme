import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ShoppingList} from './assemblyPage/shoppingList.jsx';
import {store} from './store/store.js'
import {Router,Route,hashHistory,Redirect} from 'react-router';

const root = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Redirect from="/" to="/a" />
			<Route path="/a" component={ShoppingList} />
		</Router>
	</Provider>
)

render(root, document.querySelector('#main'));
