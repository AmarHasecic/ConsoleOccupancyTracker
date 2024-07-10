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
    <View style={{flex: 2}}>
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
            <View style={styles.textInfo}>
              <Text style={{borderColor: 'black',
                borderWidth: 3
              }} >{date}</Text>
            </View>
          </View>

          <View style={ styles.row }>
            <Image 
                      style={styles.icon}
                      source={require('../assets/images/playlogo.png')}
            />
            <View style={styles.textInfo}>
              <Text style={{borderColor: 'black',
                borderWidth: 3
              }} >{params.consoleNum}</Text>
            </View>
          </View>

          <View style={ styles.row }>
            <Image 
                      style={styles.icon}
                      source={require('../assets/images/clock.png')}
            />
            <View style={styles.textInfo}>
              <Text style={{borderColor: 'black',
                borderWidth: 3
              }} >{params.timeSpent}</Text>
            </View>
          </View>

        </View>

       <View style={styles.blank}>

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
    top: "-45%",

  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  moneyBar: {
    backgroundColor: "#ff4500",
    width: "100%",
    height: "35%"
  },
  time: {
    flex: 1
  },
  timeText: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaleFont(50),
    paddingTop: "25%",
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    adjustsFontSizeToFit: true,
    allowFontScaling: true
  },
  icon: {
      flex:1,
      width: '100%', 
      height: '100%',
      resizeMode: "contain" 
    },
  containerInfo: {
      flex: 2,
      flexDirection: 'column',
      width: "70%",
      gap: 10
  },
  textInfo: {
    flex: 2,
    width: "100%",
    height: "100%",
    fontSize: scaleFont(13),
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 4
  },
  blank: {
    flex: 3
  } 
});

export default RecieptRegular;
