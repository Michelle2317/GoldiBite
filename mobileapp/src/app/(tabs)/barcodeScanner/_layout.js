import { Tabs, Stack } from 'expo-router'
import SegmentedButton from '../../../components/barcodeScanner/SegmentedButton'
import Header from '@/src/components/navigation/Header';
import HeaderRightButton from '@/src/components/navigation/HeaderRightButton'

const StackLayout = () => {
    return (
        <Stack 
        screenOptions={{
            headerStyle: {
                backgroundColor: '#FAF1E4',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShadowVisible:false
        }}>
            <Stack.Screen name="index" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 20 },
                headerTitle: () => <SegmentedButton />,
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#FFC858',
                  },
                  headerTintColor: 'unset',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}

            />
            <Stack.Screen name="barcodeResult" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />,
                headerShown: true,
            }} />
            <Stack.Screen name="menuScannerResult" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: props => <Header {...props} />,
                HeaderRightButton: props => <HeaderRightButton {...props} />,
            }} />
        </Stack>

    )
}

export default StackLayout;