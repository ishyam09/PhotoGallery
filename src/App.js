/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.statusbarHeight}>
      <View style={styles.viewStyle}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusbarHeight: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  viewStyle: {
    flex: 1,
  },
});

export default App;