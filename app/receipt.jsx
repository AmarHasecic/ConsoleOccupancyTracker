import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, PixelRatio, ScrollView, ImageBackground} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Oswald_300Light,
} from '@expo-google-fonts/oswald';
import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';


const scaleNumber = (size) => {
  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = screenWidth / 360; 
  const newSize = size * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const Reciept = () => {


  const params = useLocalSearchParams();
  const date = Date();
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Oswald_300Light,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,

  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <ImageBackground
    source={require('../assets/images/background.jpg')}
    style={styles.background}
    >
        <View style={styles.column}>

          <View style={styles.moneyBox}>
            <ScrollView horizontal={true} 
                        showsHorizontalScrollIndicator={false}>
              
        

              <ImageBackground style={styles.paymentCard}
                               imageStyle={styles.imageStyle}
                               source={require('../assets/images/orangeCard.jpg')}> 

                <Text style={[styles.paymentCardHeading, {
                  fontFamily: 'Oswald_300Light',
                }]}>
                  REGULARNI SATI
                </Text>

                <View style={styles.paymentCardContent}>
                    <Image 
                      style={styles.paymentCardIcon}
                      source={require('../assets/images/sad.png')}
                    />
                    <Text style={[styles.paymentCardContentText, {fontFamily: 'Lato_400Regular_Italic'}]}>
                        {params.moneySpentRegular} KM
                    </Text>
                </View>
              </ImageBackground>
              
              <ImageBackground style={styles.paymentCard}
                               imageStyle={styles.imageStyle}
                               source={require('../assets/images/greenCard.jpg')}> 

                <Text style={[styles.paymentCardHeading, {
                  fontFamily: 'Oswald_300Light',
                }]}>
                  HAPPY HOUR
                </Text>

                <View style={styles.paymentCardContent}>
                    <Image 
                      style={styles.paymentCardIcon}
                      source={require('../assets/images/smiley.png')}
                    />
                    <Text style={[styles.paymentCardContentText, {fontFamily: 'Lato_400Regular_Italic'}]}>
                        {params.moneySpentHappy} KM
                    </Text>
                </View>
              </ImageBackground>

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
    marginTop: scaleNumber(30)
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
    fontSize: scaleNumber(22),
    paddingTop: scaleNumber(10),
    paddingLeft: scaleNumber(30)
  },
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',

  },
  paymentCardContent:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paymentCardContentText:  {
   fontSize: scaleNumber(50),
   fontWeight: 'bold',
   color: 'white',
   flexDirection: 'row',
  },
  imageStyle: {
    borderRadius: scaleNumber(30),  
    overflow: 'hidden', 
  },
  paymentCardIcon: {
    width: '50%', 
    height: '50%',
    resizeMode: "contain",
  }
});

export default Reciept;
