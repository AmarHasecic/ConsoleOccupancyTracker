import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {useLocalSearchParams} from 'expo-router';


const Reciept = () => {

  const  parms  = useLocalSearchParams();
  console.log(parms);

  return (
    <View>
      <Text>`Račun regular</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    
});

export default Reciept;
