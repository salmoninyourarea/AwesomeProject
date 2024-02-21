import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Button, Image, Text, View } from 'react-native';
export default function Hotel() {
    return (
        <View style={{ flexDirection: 'row', justifyContent:"space-between"}}>
            <View style={{ flexDirection: "column",marginHorizontal:20 }}>
                <Text style={{ fontSize: 20 }} >Price</Text>
                <Text style={{ fontSize: 20, color: 'red' }} >$399.99</Text>
                <Text style={{ fontSize: 20}} >AVG/Night</Text>
            </View>
            <View style={{marginRight:20,justifyContent:"center"}}>
                <Button title="Book Now" color="red" />
            </View>
        </View>
    );
}
