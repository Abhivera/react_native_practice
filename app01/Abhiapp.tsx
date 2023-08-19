/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function Abhiapp(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
        Hello Abhijit
      </Text>
      <Text>Everything will be fine</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  whiteText: {
    color: 'blue',
  },
  darkText: {
    color: 'yellow',
  },
});

export default Abhiapp;
