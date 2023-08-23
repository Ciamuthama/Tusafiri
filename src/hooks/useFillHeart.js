import { HeartIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React, { useState } from 'react'
import useOutlineHeart from "./useOutlineHeart";

export default function useFillHeart() {
  const outline = useOutlineHeart()
  const [heart, toggleHeart] = useState(<HeartIcon size={wp(5)} color='red' />)
  return (
    <TouchableOpacity onPress={() => toggleHeart(outline)}>
      {heart}
    </TouchableOpacity>
  )
}