import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducers';
import GalleryApp from './components/GalleryApp';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <GalleryApp />
  </Provider>,
  document.getElementById('root'),
);
