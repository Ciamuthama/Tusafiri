import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sortCategories } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { theme } from '../theme'

export default function SortCategories() {
const [activeSort, setActiveSort] = useState('Popular')

  return (
    <View className='flex-row justify-around items-center mx-4 bg-neutral-300 shadow rounded-xl p-2 px-4 space-x-2'>
          {
              sortCategories.map((sort, index) => {
                  let isActive = sort == activeSort;
                  let activeButtonClass = isActive ? 'bg-white shadow': ''
                  return (
                    <TouchableOpacity onPress={()=> setActiveSort(sort)} key={index} className={`p-4 px-4 rounded-xl flex ${activeButtonClass}`}>
                          <Text style={{ fontSize: wp(3), color: isActive ? theme.text:'black' }}  className='font-medium'>{ sort}</Text>
                    </TouchableOpacity>
                )
              })
      }
    </View>
  )
}