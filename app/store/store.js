/**
 * [store 当前项目的状态管理器集合]
 */
import {createStore,applyMiddleware,combineReducers} from 'redux';
import createThunkMiddleware from 'redux-thunk';
import {shoppingListReducer} from './shoppingListReducer.js';
import logger from 'redux-logger';

const reducers = combineReducers({shoppingListReducer});

const store = createStore(reducers,applyMiddleware(createThunkMiddleware));

export {store};