import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Title from './components/Title';

const { width, height } = Dimensions.get('window');

class Slider extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Carousel
                inactiveSlideScale={1}
                sliderWidth={width}
                sliderHeight={height}
                itemWidth={width}
                itemHeight={height}
                >
                <Slide1 />
                <Slide2 />
            </Carousel>
            </View>
        )
    }
}

const Slide1 = () => (
    <Image 
        source={require("./images/rihanna.jpg")}
        style={[styles.slideContainer, styles.slide1]}>
        <View style={styles.titleStyle}>
            <Title />
        </View>
        <View style={styles.slideContainer}>
        </View>
        <View style={styles.slideContainer}>
        </View>
    </Image>
)

const Slide2 = () => (
    <View style={styles.slideContainer}>
        <Text>Slide2</Text>
    </View>
)

const styles = StyleSheet.create({
    titleStyle: {
        backgroundColor: 'transparent',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideContainer: {
        width,
        height,
    },
    slide1: {
        backgroundColor: "white"
    }
})

export default Slider;