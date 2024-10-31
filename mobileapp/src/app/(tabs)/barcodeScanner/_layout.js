import { Tabs, Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: 'Scanner',
                tabBar: { visible: false }, 
                tabBarStyle:{display:'none'}
            }}

            />
            <Stack.Screen name="barcodeResult" options={{
                 headerShown: false, 
            }} />
            <Stack.Screen name="menuScannerResult" options={{
                headerShown: false, 
            }} />
        </Stack>

    )
}

export default StackLayout;