import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Slider from './Slider';
import Signup from './Signup';

const RouteConfig = {
    Intro: { screen: Slider },
    Signup: { screen: Signup },
};

const IntroNav = StackNavigator(RouteConfig);

export default IntroNav;