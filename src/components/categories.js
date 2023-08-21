import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { theme } from '../theme'
import {categoriesData} from '../constants/index'

export default function Categories() {
  return (
    <View className='space-y-5'>
          <View className='mx-5 flex-row justify-between items-center'>
      <Text style={{fontSize:wp(4)}}  className='font-semibold text-neutral-700'>Categories</Text>
              <TouchableOpacity>
                  <Text style={{fontSize:wp(4), color: theme.text }} className='font-semibold text-neutral-700'>See all</Text>
      </TouchableOpacity>
          </View>
          <ScrollView horizontal
              contentInsetAdjustmentBehavior={{paddingHorizontal: 15}}
              className='space-x-2'
              showsHorizontalScrollIndicator={false}
          >
              {categoriesData.map((x, y) => {
                  return (
                      <TouchableOpacity key={y} className='flex items-center space-y-2 mx-2'>
                          <Image source={x.image} className='rounded-xl' style={{ width: wp(20), height: wp(19) }} />
                          <Text className='text-neutral-700 font-medium' style={{ fontSize: wp(3) }}>{ x.title}</Text>
                     </TouchableOpacity>
                 )
             })}
          </ScrollView>
    </View>
  )
}