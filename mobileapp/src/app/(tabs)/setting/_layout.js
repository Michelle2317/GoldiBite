import { Tabs, Stack } from 'expo-router'
import { IconButton } from 'react-native-paper';
import Header from '@/src/components/navigation/Header';
import HeaderRightButton from '@/src/components/navigation/HeaderRightButton'


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
                },
                headerShadowVisible:false
            }}
        >
            <Stack.Screen name="profileView" options={{
                headerShown: true,
                title: 'Personal Information',
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }}></Stack.Screen>
            <Stack.Screen name="allergy" options={{
                headerShown: true,
                title: 'Allergy',
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }}></Stack.Screen>
            <Stack.Screen name="location" options={{
                headerShown: true,
                title: 'Location',
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }}></Stack.Screen>
            <Stack.Screen name="notification" options={{
                headerShown: true,
                title: 'Notification',
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }}></Stack.Screen>
            <Stack.Screen name="appinfo" options={{
                headerShown: true,
                title: 'App Info',
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }}></Stack.Screen>
            <Stack.Screen name="index" options={{
                headerShown: true,
                title: 'Profile',
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }}></Stack.Screen>
        </Stack>
    )
}

export default StackLayout;