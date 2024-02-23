import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './src/navigation';

import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;