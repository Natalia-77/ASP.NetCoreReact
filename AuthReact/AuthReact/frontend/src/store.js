import { applyMiddleware, combineReducers, createStore,compose } from "redux";
 import { composeWithDevTools } from "redux-devtools-extension";
 import devToolsExtension from 'redux-devtools-extension';
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
export const history = createBrowserHistory({ basename: baseUrl });

const middleware=[
    thunk,
    routerMiddleware(history)
];

const rootReducer=combineReducers({
    auth:authReducer,
    valid:errorReducer,
    user:userReducer,
    prod:productReducer,
    router: connectRouter(history)
});

// In development, use the browser's Redux dev tools extension if installed
const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    enhancers.push(window.devToolsExtension());
}


const store = createStore(
    rootReducer,
    {},
    compose(applyMiddleware(...middleware), ...enhancers)
);
export default store;