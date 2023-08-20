import { View, Text, Image } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
    return (
        
        <View className='flex-1 flex justify-end'>
            <Image
                source={require('../../assets/images/welcome.png')}
                className='h-full w-full absolute'
               
            />
        </View>
    )
}