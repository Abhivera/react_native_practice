/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Abhijit verma</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>will</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>eventually</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>succeed.</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Sun</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Will</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Rise Again</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: 'orange',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});
