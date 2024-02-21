import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding : 20, flexDirection : 'row'}}>
            <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color : 'white' }}>9.5</Text>
         </View>
         <View style={{ padding : 6, marginTop : 0.5}}>
                <Text style={{ fontSize : 16 , color : 'orange'}}>Excellent</Text>
                <Text style={{ fontSize : 16 }}>see 801 reviews</Text>
        </View>

        </View>
           );
        }
        