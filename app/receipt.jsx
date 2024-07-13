import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const scaleFont = (size) => {
  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = screenWidth / 360; 
  const newSize = size * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const RecieptRegular = () => {

  const params = useLocalSearchParams();
  const date = Date();
  const navigation = useNavigation();

  return (
      <View style={styles.column}>
        <View style={styles.moneyBar}>
          <View style={styles.time}>
            <Text style={styles.timeText}>
              {params.moneySpent} KM
            </Text>
          </View>
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.row}>
            <Image 
              style={styles.icon}
              source={require('../assets/images/calendar.png')}
            />
            <View style={styles.textInfo}>
              <Text style={styles.text}>{date}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image 
              style={styles.iconLogo}
              source={require('../assets/images/playlogo.png')}
            />
            <View style={styles.textInfo}>
              <Text style={styles.text}>{params.consoleNum}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image 
              style={styles.icon}
              source={require('../assets/images/clock.png')}
            />
            <View style={styles.textInfo}>
              <Text style={styles.text}>{params.timeSpent}</Text>
            </View>
          </View>
        </View>

        <View style={styles.blank} />

        <View style={styles.buttonBlock}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
            <Text style={styles.buttonText}>Završi</Text>
          </TouchableOpacity> 
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  moneyBar: {
    backgroundColor: "#ff4500",
    height: scaleFont(170), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    textAlign: 'center',
    fontSize: 50,
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    adjustsFontSizeToFit: true,
    allowFontScaling: true,
  },
  animation: {
    width: scaleFont(500),
    height: scaleFont(500),
    position: 'absolute',
  },
  containerInfo: {
    flex: 2,
    flexDirection: 'column',
    width: scaleFont(300),
    gap: 10,
    paddingTop: 30
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    width: '100%', 
    height: '100%',
    resizeMode: "contain",
  },
  iconLogo: {
    flex: 1,
    width: '87%', 
    height: '87%',
    resizeMode: "contain",
  },
  textInfo: {
    flex: 2,
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  blank: {
    flex: 3,
  },
  buttonBlock: {
    position: 'absolute', 
    bottom: 20, 
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: "3%",
    paddingHorizontal: "35%",
    borderRadius: 9,
    elevation: 2,
    backgroundColor: '#ff4500',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'white',
  }
});

export default RecieptRegular;
