import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
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
  const date = Date();

  return (
    <View style={
      styles.column
    }>
      <View style={styles.moneyBar}>

        <View style={styles.time}>
          <Text style={styles.timeText}>
            {params.moneySpent} KM
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
      <View style={styles.containerInfo}>

      <View style={ styles.row }>
            <Image 
                      style={styles.icon}
                      source={require('../assets/images/calendar.png')}
            />
            <Text style={styles.textInfo}>{date}</Text>
          </View>

          <View style={ styles.row }>
            <Image 
                      style={styles.icon}
                      source={require('../assets/images/playlogo.png')}
            />
            <Text style={styles.textInfo}>{params.consoleNum}</Text>
          </View>

          <View style={ styles.row }>
            <Image 
                      style={styles.icon}
                      source={require('../assets/images/clock.png')}
            />
            <Text style={styles.textInfo}>{params.timeSpent}</Text>
          </View>

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
    top: "-45%"
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row'
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
  icon: {
      flex: 1,
      width: '100%', 
      height: '100%',
      resizeMode: "contain" 
    },
  containerInfo: {
      flexDirection: 'column',
      width: "50%",
      height: "65%",
      position: 'absolute',
      paddingTop: "70%",
      marginTop: "7%",
      gap: 15
  },
  textInfo: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
  
});

export default RecieptRegular;
