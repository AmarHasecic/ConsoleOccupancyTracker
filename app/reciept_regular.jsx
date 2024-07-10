import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams } from 'expo-router'
import { Dimensions, PixelRatio } from 'react-native';
 

const scaleFont = (size) => {
  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = screenWidth / 360; 
  const newSize = size * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const RecieptRegular = () => {

  const  params  = useLocalSearchParams();

  return (
    <View style={
      styles.row
    }>
      <View style={styles.moneyBar}>

        <View style={styles.time}>
          <Text style={styles.timeText}>
            {params.timeSpent}
          </Text>
        </View>

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
  },
  time: {
    flex: 1
  },
  timeText: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaleFont(50),
    paddingTop: "20%",
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    adjustsFontSizeToFit: true,
    allowFontScaling: true
  },
});

export default RecieptRegular;
