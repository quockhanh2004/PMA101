import React from 'react';
import {AppProvider} from './src/AppContext';
import AppNavigation from './src/AppNavigation';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
    // <View>
    //   <PaymentSuccess/>
    // </View>
  );
}

export default App;
