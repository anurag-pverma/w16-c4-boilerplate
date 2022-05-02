// create store here
import thunk from 'redux-thunk';
import createStore from redux ;
import rootReducer from "./rootReducer"
import { applyMiddleware, compose } from 'redux';


export const store =createStore(rootReducer , composeWithDevTools(applyMiddleware(logger,thunk)));

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
