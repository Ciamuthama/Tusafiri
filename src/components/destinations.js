import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { destinationData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

import useFillHeart from "../hooks/useFillHeart";
import useOutlineHeart from "../hooks/useOutlineHeart";
import { useNavigation } from "@react-navigation/native";

export default function Destinations() {
    
  const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((dest, index) => {
        return (
          <DestinationCard navigation={navigation} key={index} dest={dest} />
        );
      })}
    </View>
  );
}

const DestinationCard = ({ dest, navigation }) => {
    const fill = useFillHeart()
    const outline =useOutlineHeart()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Destination", { ...dest })}
      style={{ width: wp(44), height: wp(65) }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
    >
      <Image
        source={dest.image}
        style={{ width: wp(44), height: wp(65) }}
        className="absolute rounded-xl"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        start={[0.5, 0]}
        end={[0.5, 1]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomRightRadius: 12,
          borderBottomLeftRadius: 12,
        }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        className="absolute top-1 right-3  rounded-full p-3"
        style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        onPress={() => (fill)}
      >
        {outline}
      </TouchableOpacity>
      <Text style={{ fontSize: wp(4) }} className="text-white font-semibold">
        {dest.title}
      </Text>
      <Text style={{ fontSize: wp(2.2) }} className="text-white">
        {dest.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
