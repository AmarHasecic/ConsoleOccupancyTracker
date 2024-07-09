import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import  LottieView from 'lottie-react-native'


const RecieptRegular = () => {

  const  parms  = useLocalSearchParams();
  console.log(parms);

  return (
    <View style={[styles.container, {
                flexDirection: 'column',
                }]}>
      <View>  
      <View style={styles.moneyBox}>
      </View>   
        <LottieView
          source={require("../assets/animations/waves.json")}
          style={styles.animation}
          autoPlay
          loop
        />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', 
  },

  animation: {
    width: "100%",
    height: "50%"
  },
  moneyBox: {
    backgroundColor: "#ff4500",
    width: "100%",
    height: 200
  }
});

export default RecieptRegular;
