import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function Section2() {
    return (
       <View style={{ marginTop : -25 , marginHorizontal : 20 , flex : 1, backgroundColor : 'white',  padding : 8, borderWidth : 1, borderColor : 'gray', borderRadius : 20 }}>
        <View style={{ marginTop : 10, textAlign : 'center'}}>
                <Text style={{ fontSize : 20, textAlign : 'center' }}>Hilton San Francisco</Text>
            </View>
            <View style={{ flexDirection : "row", justifyContent : "center", marginTop : 10  }}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                </View>
                <View style={{ marginTop : 10 }}>
                <Text  style={{ fontSize : 16 , textAlign : 'center'}} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>

        </View >
              
    );
}