import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams } from 'expo-router'
 

const RecieptRegular = () => {

  const  params  = useLocalSearchParams()
  console.log(params)

  return (
    <View style={
      styles.row
    }>
      <View style={styles.moneyBar}>

      </View>
      <View style={styles.container}>
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
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },   
  animation: {
    width: "100%",
    height: "100%",
    position: 'absolute',
    top: "-45%", 
  },
  row: {
    flex: 1,
    flexDirection: 'column'
  },
  moneyBar: {
    backgroundColor: "#ff4500",
    width: "100%",
    height: "30%"
  }
});

export default RecieptRegular;
