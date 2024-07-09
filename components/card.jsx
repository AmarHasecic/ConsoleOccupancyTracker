import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useRouter } from 'expo-router';  

const Card = ({ consoleNumber}) => {

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const router = useRouter();
  
  var stopwatchTime;
  var startTime;
  var endTime;


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
                style = {
                  isStopwatchStart ? styles.textBlack : styles.textGray}>
                    {consoleNumber}
                </Text>

            </View>

              <View style={styles.stopwatchAndButtonsContainer}> 
                <Stopwatch 
                laps
                start={isStopwatchStart}
                reset={resetStopwatch}
                options={stopwatchStyle}
                getTime={(time) => {
                  stopwatchTime = time;
                }}
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

                          let currentTime = new Date();
                          let hours = currentTime.getHours();

                          /*
                          if ((hours >= 5 && hours <= 7)
                          || (hours >= 17 && hours <= 19)){
                            //Happy Hours
                            router.push({ pathname: "/reciept_happy", params: { console: consoleNumber, timeSpent: stopwatchTime } });
                          }
                          else{
                            //Regular Hours
                            router.push({ pathname: "/reciept_regular", params: { console: consoleNumber, timeSpent: stopwatchTime } });
                          }
                          */

                          router.push({ pathname: "/reciept_regular", params: { console: consoleNumber, timeSpent: stopwatchTime } });
                          
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
      gap: 12,
      
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
    textGray: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 3,
        color: 'rgba(0, 0, 0, 0.7)'
    },
    textBlack: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 3,
        color: 'rgba(0, 0, 0, 0.9)'
    },
    btn: {
      width: 47,
      height: 40,
      resizeMode: 'fit'
    },
    btnsConstainer: {
      flex: 1,
      justifyContent: 'center',
      gap: 20,
      paddingTop: 10
    },
    stopwatchAndButtonsContainer: {
      paddingHorizontal: 20,
      paddingTop: 5
    }
    
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
