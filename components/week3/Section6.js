import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ flexDirection: "column", marginHorizontal: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
            <View style={{ flexDirection: "column", paddingLeft: 15 }}>
                <Text style={{ fontSize: 20 }}>Location</Text>
                <Text style={{ color: "gray" }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
                <View style={{ paddingTop: 8 }}>
                    <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 2 / 0.9 }} source={require("../../assets/week3/map.jpg")} />
                </View>
            </View>
        </View>

    );
}
