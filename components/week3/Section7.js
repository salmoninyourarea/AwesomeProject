import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ paddingLeft: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>Room Type</Text>
            </View>
            <View style={{ padding: 5, flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 3 / 2, borderRadius : 10 }} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ padding: 10, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 20, color: 'red' }}>$399.99</Text>
                    <Text style={{ color: 'green' }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}