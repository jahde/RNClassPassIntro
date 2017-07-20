import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

class Slider extends React.Component {
    render() {
        return (
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
        )
    }
}

const Slide1 = () => (
    <View style={{ width, height }}>
        <Text>Slide1</Text>
    </View>
)

const Slide2 = () => (
    <View style={{ width, height }}>
        <Text>Slide2</Text>
    </View>
)

export default Slider;