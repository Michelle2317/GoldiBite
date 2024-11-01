import { Tabs, Stack } from 'expo-router'
import SegmentedButton from '../../../components/barcodeScanner/SegmentedButton'

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                //headerTitle: 'Scanner',
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 20 },
                // tabBarStyle: { display: 'none' },
                // tabBar: { visible: false },
                headerTitle: () => <SegmentedButton />,
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'unset',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}

            />
            <Stack.Screen name="barcodeResult" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: '',
                headerShown: true,
            }} />
            <Stack.Screen name="menuScannerResult" options={{
                headerShown: false,
            }} />
        </Stack>

    )
}

export default StackLayout;