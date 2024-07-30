import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useRouter } from 'expo-router';
import * as Notifications from 'expo-notifications';

const Card = ({ consoleNumber }) => {

  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const router = useRouter();

  var stopwatchTime;

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const scheduleNotification = async (title, body) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger: null,
    });
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission not granted to show notifications!');
      }
    };

    requestPermissions();
  }, []);


  return (
    <View
      style={styles.box}>

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
            style={
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
              style={styles.btn}
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);

                if (isStopwatchStart) {
                  scheduleNotification(`${consoleNumber}`, `The console has been running for ${stopwatchTime}`);
                }
              }}>
              <Image
                style={styles.btn}
                source={
                  isStopwatchStart
                    ? require('../assets/images/pause.png')
                    : require('../assets/images/play.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {

                Alert.alert('Naplata', 'Jeste li sigurni da želite izvršiti naplatu?', [
                  {
                    text: 'Odustani',
                    onPress: () => { },
                    style: 'cancel',
                  },
                  {
                    text: 'Nastavi', onPress: () => {
                      setIsStopwatchStart(false);
                      setResetStopwatch(true);

                      let [hours, minutes, seconds] = stopwatchTime.split(':');

                      hours = parseInt(hours)
                      minutes = parseInt(minutes)

                      let moneyRegular = 5 * (hours + minutes / 60);
                      let moneyHappyHour = 3 * (hours + minutes / 60);
                      let moneyRegular2na2 = 7 * (hours + minutes / 60);

                      let roundedMoneyeRegular = moneyRegular.toFixed(2);
                      let roundedMoneyHappyHour = moneyHappyHour.toFixed(2);
                      let roundedmoneyRegular2na2 = moneyRegular2na2.toFixed(2);


                      router.push({
                        pathname: "/receipt", params: {
                          consoleNum: consoleNumber,
                          timeSpent: stopwatchTime,
                          moneySpentRegular: roundedMoneyeRegular,
                          moneySpentHappy: roundedMoneyHappyHour,
                          moneySpentRegular2na2: roundedmoneyRegular2na2,
                          moneySpentHappy2na2: roundedMoneyeRegular
                        }
                      });

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
    resizeMode: "contain",
    paddingHorizontal: 2
  },
  btnsConstainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 6,
  },
  stopwatchAndButtonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingEnd: 10,
  },
  chipsIcon: {
    flex: 1,
    width: '95%',
    height: '80%',
    resizeMode: "contain"

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
  }

};


export default Card;
