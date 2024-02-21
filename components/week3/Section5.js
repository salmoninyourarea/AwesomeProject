import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";


export default function Section5() {
  return (
    <View style={{paddingBottom : 10, marginHorizontal : 10, marginTop : 10, borderBottomWidth : 0.25}}>
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="wifi" name="wifi" size={30} color="#AEE1E1" />
        <MyIcon title="coffee" name="coffee" size={30} color="#AEE1E1" />
        <MyIcon title="bath" name="bath" size={30} color="#AEE1E1" />
        <MyIcon title="car" name="car" size={30} color="#AEE1E1" />
        <MyIcon title="paw" name="paw" size={30} color="#AEE1E1" />
      </View>
    </View>
  );
}
