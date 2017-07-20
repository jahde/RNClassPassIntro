import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const dots = [0, 1];
const Footer = ({ index, activeIndex }) => {
    const opacity = index === activeIndex ? 1 : 0.3 ;
    const dotColor = `rgba(0, 0, 0, ${opacity})`;
    return (
        <View style={styles.footerContainer}>
            <View style={styles.dotsContainer}>
                {
                    dots.map((item, index) => {
                        const opacity = index === activeIndex ? 1 : 0.3 ;
                        const dotColor = `rgba(0, 0, 0, ${opacity})`;
                        return (
                            <View 
                                key={index}
                                style={[styles.dot, {backgroundColor: dotColor}]} />
                        )
                    })

                }
            </View>
            <View>
            </View>
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dotsContainer: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-around'
    },
    footerContainer: {
        position: 'absolute',
        height: 200,
        bottom: 0,
        left: 0,
        width,
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    }
})

export default Footer;