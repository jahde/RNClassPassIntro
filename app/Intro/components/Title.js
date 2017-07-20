import React from 'react';
import { Text } from 'react-native';

const Title = ({ index }) => {
    const color = index === 0 ? 'black': 'white';
    return (
        <Text style={{ color, fontWeight: 'bold' }}>CLASSPASS</Text>
    )
}

export default Title;