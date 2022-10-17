import { applyMiddleware, createStore } from 'redux';
import { mobileReducer } from './reducers/mobile';
import createSagaMiddleWare from 'redux-saga';
import { watchUser } from './saga/users.saga';

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(mobileReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watchUser);
