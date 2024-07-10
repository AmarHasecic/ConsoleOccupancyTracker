import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useRouter } from 'expo-router';  

const Card = ({ consoleNumber}) => {

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const router = useRouter();
  
  var stopwatchTime;

  return (
    <View
    style = {styles.box}>

        <View style={[
                styles.container,
                {
                flexDirection: 'row',
                gap: 40
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
              style = {styles.btn}
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}>
                 <Image
                    style = {styles.btn}
                    source={
                      isStopwatchStart
                        ? require('../assets/images/pause.png')
                        : require('../assets/images/play.png')
                    }
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

                          /*
                          let currentTime = new Date();
                          let hours = currentTime.getHours();

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

                          const [hours, minutes, seconds] = stopwatchTime.split(':');
                          var money = 5*(hours + minutes/60);
                          var roundedMoney = money.toFixed(2);

                          router.push({ pathname: "/reciept_regular", params: { consoleNum: consoleNumber, timeSpent: stopwatchTime, moneySpent: roundedMoney } });
                          
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
      flex: 1,
      width: '100%', 
      height: '100%',
      resizeMode: "contain" 
    },
    btnsConstainer: {
      flex: 1,
      justifyContent: 'center',
      paddingVertical: 6
    },
    stopwatchAndButtonsContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 5,
      paddingEnd: 10,
    }
    
});

const stopwatchStyle = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 5,
    borderRadius: 5,
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 25,
    color: 'black',
    marginLeft: 7,
  },
};


export default Card;
