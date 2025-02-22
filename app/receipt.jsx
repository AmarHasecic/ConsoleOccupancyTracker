import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, PixelRatio, ScrollView } from 'react-native';
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

  const imageMapping = {
    regular: require('../assets/images/twoplayers.png'),
    regularPlus2: require('../assets/images/fourplayers.png'),
    happyHour: require('../assets/images/twohappypeople.png'),
    happyHourPlus2: require('../assets/images/happyfourplayers.png')
  };

  const [money, setMoney] = useState(params.moneySpentRegular);
  const [title, setTitle] = useState("Regular");
  const [icon, setIcon] = useState('regular');

  const [clickedOptionOne, setClickedOptionOne] = useState(true);
  const [clickedOptionTwo, setClickedOptionTwo] = useState(false);
  const [clickedOptionThree, setClickedOptionThree] = useState(false);
  const [clickedOptionFour, setClickedOptionFour] = useState(false);


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (

      <View style={styles.column}>

        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.moneyCardIconContainer}>
            <Image
             style={[styles.moneyCardIcon, { opacity: 0.7 }]}
              source={imageMapping[icon]}
            />
          </View>

          <Text style={styles.moneyText}> {money} KM</Text>
        </View>

        <View style={styles.optionsContainer}>

          <Text style={[styles.textInfo, {
            padding: scaleNumber(10),
            fontSize: scaleNumber(21),
            paddingTop: scaleNumber(30),
            paddingBottom: scaleNumber(15)
          }]}>
            Način računanja
          </Text>

          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={clickedOptionOne? styles.optionHighlighted : styles.option} onPress={() => {
              setMoney(params.moneySpentRegular)
              setTitle("Regular")
              setIcon('regular')
              setClickedOptionOne(true)
              setClickedOptionTwo(false)
              setClickedOptionThree(false)
              setClickedOptionFour(false)
            }} >
              <View style={styles.optionHeader}>
                <View style={styles.optionHeaderRow}>
                  <View style={styles.optionHeaderIconSpot}>
                    <Image
                      style={{ height: "60%", width: "60%", resizeMode: "contain" }}
                      source={require('../assets/images/twoplayers.png')}
                    />
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(15) }]}> 5.00 KM</Text>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(11), color: 'rgba(0, 0, 0, 0.4)', }]}> 60 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.optionFutter}>
                <Text style={[styles.textInfo, { fontSize: scaleNumber(17) }]}>Regular</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={clickedOptionTwo? styles.optionHighlighted : styles.option} onPress={() => {
              setMoney(params.moneySpentRegular2na2)
              setTitle("Regular +2")
              setIcon('regularPlus2')
              setClickedOptionOne(false)
              setClickedOptionTwo(true)
              setClickedOptionThree(false)
              setClickedOptionFour(false)
            }} >
              <View style={styles.optionHeader}>
                <View style={styles.optionHeaderRow}>
                  <View style={styles.optionHeaderIconSpot}>
                    <Image
                      style={{ height: "60%", width: "60%", resizeMode: "contain" }}
                      source={require('../assets/images/fourplayers.png')}
                    />
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(15) }]}> 7.00 KM</Text>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(11), color: 'rgba(0, 0, 0, 0.4)', }]}> 60 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.optionFutter}>
                <Text style={[styles.textInfo, { fontSize: scaleNumber(17) }]}>Regular +2</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={clickedOptionThree? styles.optionHighlighted : styles.option} onPress={() => {
              setMoney(params.moneySpentHappy)
              setTitle("Happy Hour")
              setIcon('happyHour')
              setClickedOptionOne(false)
              setClickedOptionTwo(false)
              setClickedOptionThree(true)
              setClickedOptionFour(false)
            }} >
              <View style={styles.optionHeader}>
                <View style={styles.optionHeaderRow}>
                  <View style={styles.optionHeaderIconSpot}>
                    <Image
                      style={{ height: "60%", width: "60%", resizeMode: "contain" }}
                      source={require('../assets/images/twohappypeople.png')}
                    />
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(15) }]}> 3.00 KM</Text>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(11), color: 'rgba(0, 0, 0, 0.4)', }]}> 60 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.optionFutter}>
                <Text style={[styles.textInfo, { fontSize: scaleNumber(17) }]}>Happy Hour</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={clickedOptionFour? styles.optionHighlighted : styles.option} onPress={() => {
              setMoney(params.moneySpentHappy2na2)
              setTitle("Happy Hour +2")
              setIcon('happyHourPlus2')
              setClickedOptionOne(false)
              setClickedOptionTwo(false)
              setClickedOptionThree(false)
              setClickedOptionFour(true)
            }} >
              <View style={styles.optionHeader}>
                <View style={styles.optionHeaderRow}>
                  <View style={styles.optionHeaderIconSpot}>
                    <Image
                      style={{ height: "60%", width: "60%", resizeMode: "contain" }}
                      source={require('../assets/images/happyfourplayers.png')}
                    />
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(15) }]}> 5.00 KM</Text>
                    <Text style={[styles.textInfo, { fontSize: scaleNumber(11), color: 'rgba(0, 0, 0, 0.4)', }]}> 60 min</Text>
                  </View>
                </View>
              </View>
              <View style={styles.optionFutter}>
                <Text style={[styles.textInfo, { fontSize: scaleNumber(17) }]}>Happy Hour +2</Text>
              </View>
            </TouchableOpacity>

          </ScrollView>

        </View>

        <Text style={[styles.textInfo, {
          paddingHorizontal: scaleNumber(10),
          fontSize: scaleNumber(21),
          paddingBottom: scaleNumber(20)
        }]}>
          Informacije
        </Text>

        <View style={styles.containerInfo}>
          <View style={styles.containerInfoColumn}>

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
    backgroundColor: '#00b386',
    borderTopRightRadius: scaleNumber(20),
    borderBottomStartRadius: scaleNumber(20),
  },
  title: {
    fontWeight: 'bold',
    fontSize: scaleNumber(20),
    color: 'rgba(0, 0, 0, 0.6)',
    padding: scaleNumber(15)
  },
  moneyCardIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: "20%",
    height: "42%",
    padding: scaleNumber(15)
  },
  moneyCardIcon: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  },
  moneyText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingLeft: scaleNumber(15),
    paddingBottom: scaleNumber(10),
    fontSize: scaleNumber(32),
  },
  optionsContainer: {
    flex: 1.5,
  },
  option: {
    height: "70%",
    width: scaleNumber(150),
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 2,
    borderRadius: scaleNumber(20),
    margin: scaleNumber(5)
  },
  optionHighlighted: {
    height: "70%",
    width: scaleNumber(150),
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: scaleNumber(20),
    margin: scaleNumber(5),
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  optionFutter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingLeft: scaleNumber(15),
    paddingBottom: scaleNumber(10)
  },
  optionHeaderRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10
  },
  optionHeader: {
    width: "100%",
    height: "60%",
    paddingTop: scaleNumber(10),
    paddingLeft: scaleNumber(12)
  },
  optionHeaderIconSpot: {
    width: "40%",
    height: "95%",
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: scaleNumber(12),
    justifyContent: 'center',
    alignItems: 'center'

  },
  containerInfoColumn: {
    flex: 1,
    flexDirection: 'column',
    gap: 7,
    paddingTop: "5%"
  },
  containerInfo: {
    flex: 0.8,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    paddingHorizontal: scaleNumber(10),
    paddingBottom: scaleNumber(15),
    borderRadius: scaleNumber(20),
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
    flex: 5,
    justifyContent: 'center',
    height: 100,
    paddingRight: scaleNumber(50)
  },
  textInfo: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'rgba(0, 0, 0, 0.75)',
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
    paddingVertical: "3.5%",
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
