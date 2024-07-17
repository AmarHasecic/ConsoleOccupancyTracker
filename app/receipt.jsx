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



        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>



        </ScrollView>



        <View style={styles.containerInfo}>
          
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
    height: "15%",
    backgroundColor: '#1affa3'
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'column',
    width: "100%",
    height: "50%",
    gap: 5
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
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    height: 100
  },
  textInfo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  blank: {
    flex: 2,
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
