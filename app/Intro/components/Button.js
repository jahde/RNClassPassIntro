import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Button = ({ index }) => {
    let customButtonStyle = { backgroundColor: '#3b39da' };
    if (index !== 0) {
        customButtonStyle = {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
        }
    }
    return (
        <TouchableHighlight style={[styles.button, customButtonStyle]}>
            <Text style={styles.buttonText}>START CLASSPASS</Text>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'transparent',
        height: 46,
        width: width * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default Button;