import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { setContactsLS } from 'helpers/storage';
import { debounce } from 'debounce';

store.subscribe(
  debounce(() => {
    setContactsLS(store.getState().contacts);
  }, 100)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
