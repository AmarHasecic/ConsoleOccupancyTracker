import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Card from '../../components/card';


const Index = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
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

                                                                          