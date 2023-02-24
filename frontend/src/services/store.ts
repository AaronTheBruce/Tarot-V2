import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { AppState } from './state';
import rootReducer from './reducers';
import rootEpic from './epics';

export default function configureStore(preloadedState?: AppState) {
  const epicMiddleware = createEpicMiddleware()

  const middlewares = [epicMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares, logger)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  epicMiddleware.run(rootEpic)

  return store;
}
