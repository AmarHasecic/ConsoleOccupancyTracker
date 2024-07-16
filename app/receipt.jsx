import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, PixelRatio, ScrollView, ImageBackground} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import LottieView from 'lottie-react-native';

const scaleNumber = (size) => {
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
    <ImageBackground
    source={require('../assets/images/background.jpg')}
    style={styles.background}
    >
        <View style={styles.column}>

          <View style={styles.moneyBox}>
            <ScrollView horizontal={true} 
                        showsHorizontalScrollIndicator={false}>
              
              <View style={styles.paymentCard}> 

                <Text style={styles.paymentCardHeading}>
                  REGULARNI SATI
                </Text>
              </View>
              
              <View style={styles.paymentCard}> 
              <Text style={styles.paymentCardHeading}>
                  HAPPY HOUR
                </Text>
              </View>

            </ScrollView>
          </View>

        <View style={styles.lowerContainer}> 

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
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  moneyBox: {
    backgroundColor: 'transparent',
    height: scaleNumber(300), 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleNumber(7)
  },
  time: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold'
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'column',
    width: scaleNumber(300),
    height: "100%",
    gap: 10
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
    height: 100
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  blank: {
    flex: 2,
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
    paddingHorizontal: "40%",
    borderRadius: 9,
    elevation: 2,
    backgroundColor: '#009999',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'white',
  },
  lowerContainer: {
    flex: 1,
  },
  paymentCard: {
    width: scaleNumber(320),
    borderRadius: scaleNumber(30),
    marginVertical: scaleNumber(35),
    marginHorizontal: scaleNumber(5),
    backgroundColor: '#006666'
  },
  paymentCardHeading: {
    color: 'white',
    fontSize: scaleNumber(15),
    fontWeight: 'bold',
    padding: scaleNumber(20)
  },
  animation: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',

  }
});

export default RecieptRegular;
