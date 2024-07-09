import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {useLocalSearchParams} from 'expo-router';


const RecieptHappy = () => {

  const  parms  = useLocalSearchParams();
  console.log(parms);

  return (
    <View>
      <Text>Račun happy hour</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    
});

export default RecieptHappy;
