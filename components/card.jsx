import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card = ({ consoleNumber, handleTouch}) => {

    const onPress = () => {
        handleTouch(consoleNumber)
      };


  return (
    <View
    style = {styles.box}>

        <TouchableOpacity style={[
                styles.container,
                {
                flexDirection: 'row',
                },
            ]} 
            onPress={onPress}>        


            <Image
            style={styles.img}
            source={require('../assets/images/playstationlogo.png')} 
            />

            <Text>
                {consoleNumber}
            </Text>

        </TouchableOpacity>

    </View>


  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        gap: 20
      },
    box: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        width: '100%',
        borderRadius: 10
      },
    img: {
        width: 100, 
        height: 80
    }
});

export default Card;
