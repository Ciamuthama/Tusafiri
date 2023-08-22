import { View, Text, Image,SafeAreaView ,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ChevronDoubleLeftIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import FillHeart from '../components/fillHeart'
import OutlineHeart from '../components/outlineHeart'
import { theme } from '../theme'
import { ClockIcon } from 'react-native-heroicons/solid'



export default function DestinationScreen({route}) {
    const{title,image,price,longDescription,duration, distance, weather} = route.params
    const navigation = useNavigation()
  return (
      <View className="bg-white flex-1">
          
          <Image source={image} style={{ width: wp(100), height: hp(55) }} />
         
          <SafeAreaView className='absolute flex-row justify-between items-center w-full mt-10'>
              <TouchableOpacity
              onPress={()=>navigation.navigate('Home')}
              className='p-3 rounded-full ml-4' style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
                  <ChevronDoubleLeftIcon size={wp(5)} strokeWidth={4} color={'white'}/>
              </TouchableOpacity>

              <TouchableOpacity className='absolute  right-3  rounded-full p-3' style={{ backgroundColor: "rgba(255,255,255,0.4)" }} onPress={() => <FillHeart />}>
                <OutlineHeart />
            </TouchableOpacity>
          </SafeAreaView>
          <View style={{borderTopLeftRadius:40, borderTopRightRadius:40}} className='px-5 flex flex-1 justify-between bg-white pt-8 -mt-14'>
        
              <ScrollView showsVerticalScrollIndicator={false} className='space-y-5'>
                  <View className='flex-row justify-between items-start'>
                <Text style={{fontSize:wp(6)}} className='flex-1 font-bold text-neutral-700'>{title}</Text>
                      <Text  style={{fontSize:wp(6), color: theme.text}} className='font-semibold'>{ price}</Text>
                  </View>
                  <Text style={{fontSize:wp(4)}} className='text-neutral-700 tracking-wide mb-2'>{ longDescription}</Text>
              <View className='flex-row justify-between mx-1'>
              <View className='flex-row space-x-2 items-start'>
                          <ClockIcon size={wp(7)} color={'skyblue'} />
                          <View className='flex space-y-2 justify-center'>
                              <Text style={{fontSize:wp(3.5)}} className='font-bold text-neutral-700'>{duration}</Text>
                              <Text style={{fontSize:wp(3.2)}}  className='font-semibold text-neutral-600'>Duration</Text>
                          </View>
                      </View>
                      <View className='flex-row space-x-2 items-start'>
                          <MapPinIcon size={wp(7)} color={'#f87171'} />
                          <View className='flex space-y-2 justify-center'>
                              <Text style={{fontSize:wp(3.5)}} className='font-bold text-neutral-700'>{distance}</Text>
                              <Text style={{fontSize:wp(3.2)}}  className='font-semibold text-neutral-600'>Distance</Text>
                          </View>
                      </View>
                      <View className='flex-row space-x-2 items-start'>
                          <SunIcon size={wp(7)} color={theme.text} />
                          <View className='flex space-y-2 justify-center'>
                              <Text style={{fontSize:wp(3.5)}} className='font-bold text-neutral-700'>{weather}</Text>
                              <Text style={{fontSize:wp(3.2)}}  className='font-semibold text-neutral-600'>Temperature</Text>
                          </View>
                  </View>
              </View>
              </ScrollView>
              <TouchableOpacity style={{ height: wp(15), width:wp(90)}} className='mb-6 mx-auto flex justify-center items-center bg-orange-600 rounded-xl p-5 shadow'>
                  <Text style={{fontSize:wp(4)}} className='text-white font-bold'>Book Now</Text>
              </TouchableOpacity>
          </View>
          
    </View>
  )
}