import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useNavigation } from 'expo-router';  

const Card = ({ consoleNumber}) => {

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const navigation = useNavigation()

  return (
    <View
    style = {styles.box}>

        <View style={[
                styles.container,
                {
                flexDirection: 'row',
                },
            ]}>

           <View style={[
                styles.container,
                {
                flexDirection: 'row',
                },
            ]}>
     
                <Image
                style={styles.img}
                source={
                  isStopwatchStart
                    ? require('../assets/images/playstationon.png')
                    : require('../assets/images/playstationoff.png')
                } 
                />
                <Text
                style = {styles.txt}>
                    {consoleNumber}
                </Text>

            </View>

              <View style = {[
                styles.container,
                {
                  paddingLeft: 10
                }
              ]} >
                <Stopwatch 
                laps
                start={isStopwatchStart}
                reset={resetStopwatch}
                options={stopwatchStyle}
                />
            <View style={[
                          styles.btnsConstainer,
                          {
                          flexDirection: 'row',                     
                          },
                        ]}>

              <TouchableOpacity
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}>
                 <Image
                    source={
                      isStopwatchStart
                        ? require('../assets/images/pause.png')
                        : require('../assets/images/play.png')
                    }
                    style={styles.btn}
              />
              </TouchableOpacity>
              <TouchableOpacity
                  style = {styles.btn}
                  onPress={() => {

                    Alert.alert('Naplata', 'Jeste li sigurni da želite izvršiti naplatu?', [
                      {
                        text: 'Odustani',
                        onPress: () => {},
                        style: 'cancel',
                      },
                      {text: 'Nastavi', onPress: () => 
                       {
                          setIsStopwatchStart(false);
                          setResetStopwatch(true);
                          navigation.navigate("reciept", { screen: "/reciept" })
                       } 
                      },
                    ]);

                  }}>
                  <Image 
                    style={styles.btn}
                    source={require('../assets/images/money.png')}
                  />
              </TouchableOpacity>

              </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
      flex: 1,
      padding: 5,
      gap: 12
    },
    box: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        width: '100%',
        borderRadius: 10
      },
    img: {
        width: 45, 
        height: 45,
        resizeMode: 'contain'
    },
    txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    btn: {
      width: 47,
      height: 40,
      resizeMode: 'fit'
    },
    btnsConstainer: {
      flex: 1,
      justifyContent: 'center',
      gap: 14
    },
    
});

const stopwatchStyle = {
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 5,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
    marginLeft: 7,
  },
};


export default Card;
