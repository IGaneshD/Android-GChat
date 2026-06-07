/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, TextInput } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode)

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}  />
      <AppContent/>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>
        <Text style={{textAlign:'center', fontSize:36}}>Hi Ganesh</Text>
        <Text>{'\n'}</Text>
        <Text style={{fontStyle:'italic'}}>
        Welcome 😊 to the World of Mobile Apps
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  titleText :{
    width: 350,
    color: '#ffffff',
    fontWeight:700,
    flexWrap:'wrap'
    
  }
});

export default App;
