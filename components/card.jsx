import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = () => {
  return (
    <Image
    style={styles.box}
    source={require('../assets/images/react-logo.png')} 
  />
  );
};

const styles = StyleSheet.create({
    box: {
        flex: 1, 
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margine: 10
      }
});

export default Card;
