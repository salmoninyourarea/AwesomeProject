import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
    
        <View style={{ flexDirection: 'row' , marginTop : 20 }}>
            <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9 }} source={require('../../assets/week3/room-1.jpg')} />
        </View>
    
        </View>
    );
}

