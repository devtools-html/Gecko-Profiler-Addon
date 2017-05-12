import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createUIStore } from 'redux-webext';
import Page from './components/page';

async function init() {
  const store = await createUIStore();

  ReactDOM.render(
    <Provider store={store}>
      <Page />
    </Provider>,
    document.getElementById('root')
  );
}

init();
