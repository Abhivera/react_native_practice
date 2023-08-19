import {SafeAreaView, Text, ScrollView} from 'react-native';
import React from 'react';
import Flatcard from './components/Flatcard';
import ElevatedCards from './components/ElevatedCards';
import Fancycard from './components/Fancycard';
import Actioncard from './components/Actioncard';
import AnimalList from './components/AnimalList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Abhjijit</Text>
        <Flatcard />
        <ElevatedCards />
        <Fancycard />
        <Actioncard />
        <AnimalList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
