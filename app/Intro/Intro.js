import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Slider from './Slider';

const RouteConfig = {
    Intro: { screen: Slider },
};

const IntroNav = StackNavigator(RouteConfig);

export default IntroNav;