import React from 'react';
import type {ReactNode} from 'react';
import {PaperProvider} from 'react-native-paper';
//navigator
import Navigator from '../navigation';

const App: () => ReactNode = () => {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
