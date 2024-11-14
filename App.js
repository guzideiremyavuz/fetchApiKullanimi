import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { User } from './User';
import { UserList } from './UserList';
import {NavigationContainer} from '@react-navigation/native';
import { Navigator } from './Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigator/>
    </NavigationContainer>
  );
}    


