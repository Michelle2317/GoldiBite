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
                headerTitle: 'Result'
            }} />
        </Stack>

    )
}

export default StackLayout;