import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native'
import AppNavigation from './src/navigations';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
    <AppNavigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

