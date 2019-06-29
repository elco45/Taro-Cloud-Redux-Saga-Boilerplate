/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers/index';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default function configStore() {
  const sagamiddleware = createSagaMiddleware();
  const middlewares = [sagamiddleware];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    middlewares.push(require('redux-logger').createLogger());
  }

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  store.runSaga = sagamiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
