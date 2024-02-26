import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
import config from './src/amplifyconfiguration.json';
Amplify.configure(config);

function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;