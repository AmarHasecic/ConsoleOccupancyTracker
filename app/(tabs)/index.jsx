import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Card from '../../components/card';


const Index = () => {

  const handleCardPress = (consoleNumber) => {
    console.log(consoleNumber);
  };

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
       handleTouch={handleCardPress}
      />
      <Card
       consoleNumber="Konzola 2"
       handleTouch={handleCardPress}
      />
      <Card
       consoleNumber="Konzola 3"
       handleTouch={handleCardPress}
      />
      <Card
       consoleNumber="Konzola 4"
       handleTouch={handleCardPress}
      />
      <Card
       consoleNumber="Konzola 5"
       handleTouch={handleCardPress}
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

                                                                          