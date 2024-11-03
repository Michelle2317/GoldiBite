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
                    backgroundColor: '#FAF1E4',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerShadowVisible:false,
            }}
        >
            <Stack.Screen name="index" options={{
                headerShown: true,
                headerTitle: 'Setting'
            }}></Stack.Screen>
            <Stack.Screen name="profileView" options={{
                headerShown: true,
                headerTitle: 'Profile'
            }}></Stack.Screen>
            <Stack.Screen name="allergy" options={{
                headerShown: true,
                headerTitle: 'Allergy'
            }}></Stack.Screen>
            <Stack.Screen name="location" options={{
                headerShown: true,
                headerTitle: 'Location'
            }}></Stack.Screen>
            <Stack.Screen name="notification" options={{
                headerShown: true,
                headerTitle: 'Notification'
            }}></Stack.Screen>
            <Stack.Screen name="toggleTheme" options={{
                headerTitle: 'Setting'
            }}></Stack.Screen>
        </Stack>

    )
}

export default StackLayout;