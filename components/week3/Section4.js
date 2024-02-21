import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ marginHorizontal : 10, borderTopWidth : 0.5, borderBottomWidth : 0.5}}>
           <View style={{ padding: 15}}>
                    <Text style={{ fontSize: 20 }}>Hotel Description</Text>
                    <Text style={{ fontSize: 10 }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                </View>
        </View>
    );
}