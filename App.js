import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import { GlobalAppProvider } from './context/globalAppContext';

import Main from './screens/Main';
import About from './screens/About';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <GlobalAppProvider>
          <Tab.Navigator>
            <Tab.Screen name='Rush It' component={Main} />
            <Tab.Screen name='About' component={About} />
          </Tab.Navigator>
          <StatusBar style='auto' />
        </GlobalAppProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
