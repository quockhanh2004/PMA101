

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/authen/Login';
import Register from './src/authen/Register';
import { AppProvider } from './src/AppContext';
import AppNavigation from './src/AppNavigation';
import Products from './src/main/stacks/Products';
import Detail from './src/main/stacks/Detail';
import Payment from './src/main/stacks/Payment';
import PaymentSuccess from './src/main/stacks/PaymentSuccess';






function App(): React.JSX.Element {
  return (
    <AppProvider>
      <AppNavigation/>
    </AppProvider>
    // <View>
    //   <PaymentSuccess/>
    // </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
