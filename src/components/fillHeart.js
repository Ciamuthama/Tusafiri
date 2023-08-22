import { HeartIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


import React, { useState } from 'react'
import OutlineHeart from "./outlineHeart";

export default function FillHeart() {
    const [heart,toggleHeart]= useState( <HeartIcon size={wp(5)} color='red'/>)
    return (
      <TouchableOpacity  onPress={()=>toggleHeart(<OutlineHeart />)}>
         {heart}
      </TouchableOpacity>
  )
}