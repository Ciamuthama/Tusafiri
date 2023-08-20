import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/homeScreen';
import WelcomeScreen from '../screens/welcomeScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}} >
                {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
                <Stack.Screen name='Welcome Screen' component={WelcomeScreen} options={{ headerShow: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;