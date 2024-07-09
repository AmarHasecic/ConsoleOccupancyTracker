import React from 'react';
import { View, StyleSheet} from 'react-native';
import Card from '../components/card';


const Index = () => {

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>

      <Card
       consoleNumber="Konzola 1"
      />
      <Card
       consoleNumber="Konzola 2"
      />
      <Card
       consoleNumber="Konzola 3"
      />
      <Card
       consoleNumber="Konzola 4"
      />
      <Card
       consoleNumber="Konzola 5"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10
  }
});

export default Index;

                                                                          