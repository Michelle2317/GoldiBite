import { Tabs, Stack } from 'expo-router'
import { IconButton } from 'react-native-paper';


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'index',
  };
const StackLayout = () => {
    return (
        <Stack initial="index"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#F4EADA',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
					fontSize: 24,
                },
                headerShadowVisible:false
            }}
        >
            <Stack.Screen name="profileView" options={{
                headerShown: true,
                title: 'Personal Information',
                headerBackTitle:'Back',
                headerTitle: "Profile"
            }}></Stack.Screen>
            <Stack.Screen name="emergency" options={{
                headerShown: true,
                headerBackTitle:'Back',
                title: 'Emergency Contact'
            }}></Stack.Screen>
            <Stack.Screen name="allergy" options={{
                headerShown: true,
                headerBackTitle:'Back',
                title: 'Allergy'
            }}></Stack.Screen>
            <Stack.Screen name="notification" options={{
                headerShown: true,
                headerBackTitle:'Back',
                title: 'Notification'
            }}></Stack.Screen>
            <Stack.Screen name="appinfo" options={{
                headerShown: true,
                headerBackTitle:'Back',
                title: 'App Info'
            }}></Stack.Screen>
            <Stack.Screen name="index" options={{
                headerShown: true,
                headerBackTitle:'Back',
                title: 'Profile'
            }}></Stack.Screen>
            <Stack.Screen name="preference" options={{
                headerShown: true,
                headerBackTitle:'Back',
                title: 'Preference'
            }}></Stack.Screen>
        </Stack>
    )
}

export default StackLayout;