import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

const Card = ({ consoleNumber, isOccupied}) => {

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View
    style = {styles.box}>

        <View style={[
                styles.container,
                {
                flexDirection: 'row',
                },
            ]}>        
            <Image
            style={styles.img}
            source={require('../assets/images/playstationlogo.png')} 
            />

            <Text
            style = {styles.txt}>
                {consoleNumber}
            </Text>

            <View>
              <Stopwatch
              laps
              start={isStopwatchStart}
              reset={resetStopwatch}
              />

              <TouchableHighlight
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}>
                <Text>
                  {!isStopwatchStart ? 'START' : 'STOP'}
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                  onPress={() => {
                    setIsStopwatchStart(false);
                    setResetStopwatch(true);
                  }}>
                  <Text>RESET</Text>
              </TouchableHighlight>
            </View>

        </View>

    </View>


  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 10
      },
    box: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        width: '100%',
        borderRadius: 10
      },
    img: {
        width: 40, 
        height: 40,
        resizeMode: 'contain'
    },
    txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.)'
    } 
});

export default Card;
