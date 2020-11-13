// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import Router from './router'


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Router/>
//     </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import 'react-native-gesture-handler';
import React from 'react'
import MainNavigator from './router'
import { Provider } from 'react-redux';
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as PaperProvider  } from 'react-native-paper'
const App = ()=>{
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <MainNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App