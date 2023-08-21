import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
    return (
        
        <View className='flex-1 flex justify-end'>
            <Image
                source={require('../../assets/images/welcome.png')}
                className='h-full w-full absolute'
               
            />

            <View className='p-5 pb-10 space-y-8'>
                <View className='space-y-3'>
                    <Text className='text-white font-bold text-5xl'>Traveling with Easy</Text>
                    <Text className='text-neutral-200 font-medium'>
                        Experience the world's best adventure around the world with us
                    </Text>
                </View>
                <TouchableOpacity className='bg-orange-500 mx-auto p-3 px-12 rounded-full'>
                    <Text className='text-white font-bold'>
                    Let's Go
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}