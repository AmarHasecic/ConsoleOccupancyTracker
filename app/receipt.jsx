import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, PixelRatio, ScrollView, ImageBackground } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Oswald_300Light,
} from '@expo-google-fonts/oswald';


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

  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (

      <View style={styles.column}>

        <View style={styles.header}>

        </View>

        <View style={styles.optionsContainer}>

          <Text style={[styles.textInfo, {
            padding: scaleNumber(10),
            fontSize: scaleNumber(21),
            paddingTop: scaleNumber(30),
            paddingBottom: scaleNumber(12)
          }]}>
            Način izračuna cijene
          </Text>

            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>

              <View style={styles.option}>

              </View>
              <View style={styles.option}>

              </View>
              <View style={styles.option}>

              </View>
              <View style={styles.option}>

              </View>

            </ScrollView>
        
        </View>

        <View style={styles.containerInfo}>

          <Text style={[styles.textInfo, {
            padding: scaleNumber(10),
            fontSize: scaleNumber(21),
            marginBottom: scaleNumber(12)
          }]}>
            Informacije
          </Text>

          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../assets/images/calendar.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textInfo}>{date}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              style={styles.iconLogo}
              source={require('../assets/images/playlogo.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textInfo}>{params.consoleNum}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              style={styles.icon}
              source={require('../assets/images/clock.png')}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textInfo}>{params.timeSpent}</Text>
            </View>
          </View>
        </View>

        <View style={styles.blank} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
            <Text style={styles.buttonText}>Završi</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  header: {
    width: "100%",
    height: "20%",
    backgroundColor: '#1affa3',
    borderTopRightRadius: scaleNumber(20),
    borderBottomStartRadius: scaleNumber(20),
  },
  optionsContainer: {
    flex: 1.5,
  },
  option: {
    height: "70%",
    width: scaleNumber(150),
    borderColor: 'rgba(0, 0, 0, 0.7)',
    borderWidth: 2,
    borderRadius: scaleNumber(20),
    margin: 7
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'column',
    gap: 7,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flex: 2,
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  },
  iconLogo: {
    flex: 2,
    width: '87%',
    height: '87%',
    resizeMode: "contain",
  },
  textContainer: {
    flex: 4,
    justifyContent: 'center',
    height: 100,
    paddingRight: scaleNumber(50)
  },
  textInfo: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  blank: {
    flex: 1,
  },
  buttonContainer: {
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
  }
});

export default Reciept;
