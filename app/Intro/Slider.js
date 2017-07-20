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
import Footer from './components/Footer';

const { width, height } = Dimensions.get('window');

class Slider extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        index: 0,
    }
    onSnapToItem = (index) => {
        this.setState({ index })
    }
    render() {
        return (
            <View style={ styles.carouselContainer }>
                <Carousel
                    onSnapToItem={this.onSnapToItem}
                    inactiveSlideScale={1}
                    sliderWidth={width}
                    sliderHeight={height}
                    itemWidth={width}
                    itemHeight={height}
                    >
                    <Slide1 index={this.state.index} />
                    <Slide2 />
                </Carousel>
                <Footer onPress={() => this.props.navigation.navigate('Signup')} 
                    activeIndex={this.state.index} />
                <View style={styles.titleStyle}>
                    <Title index={this.state.index} />
                </View>
            </View>
        )
    }
}

const Slide1 = ({ index }) => (
    <Image 
        source={require("./images/rihanna.jpg")}
        style={[styles.slideContainer, styles.slide1]}>
        <View>
        </View>
        <View>
        </View>
    </Image>
)

const Slide2 = () => (
    <View style={styles.slideContainer}>
        <Text>Slide2</Text>
    </View>
)

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
    },
    titleStyle: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width
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