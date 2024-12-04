import React from 'react';
import type {ReactNode} from 'react';
import {PaperProvider} from 'react-native-paper';
//redux
import {Provider} from 'react-redux';
import {store} from '../reduxstore/store';
//navigator
import Navigator from '../navigation';

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
