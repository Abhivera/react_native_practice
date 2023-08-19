/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flatcard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatcard</Text>
      <View style={styles.container}>
        <View style={[styles.card1, styles.card2]}>
          <Text>DON</Text>
        </View>
        <View style={[styles.card1, styles.card3]}>
          <Text>Abhi</Text>
        </View>
        <View style={[styles.card1, styles.card4]}>
          <Text>Jeet</Text>
        </View>
      </View>
    </View>
  );
};

export default Flatcard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    padding: 8,
  },
  card1: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2: {
    backgroundColor: 'red',
  },
  card3: {
    backgroundColor: 'blue',
  },
  card4: {
    backgroundColor: 'grey',
  },
});
