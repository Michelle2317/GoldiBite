import { Tabs, Stack } from 'expo-router'
import SegmentedButton from '../../../components/barcodeScanner/SegmentedButton'
import HeaderRightButton from '@/src/components/navigation/HeaderRightButton'

const StackLayout = () => {
    return (
        <Stack 
        screenOptions={{
            headerStyle: {
                backgroundColor: '#F4EADA',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShadowVisible:false
        }}>
            <Stack.Screen name="index" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: () => <SegmentedButton />,
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#FFC858',
                  },
                  headerTintColor: 'unset',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }} />
            
            <Stack.Screen name="menuCamera" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: () => <SegmentedButton />,
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#FFC858',
                  },
                  headerTintColor: 'unset',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }} />
            <Stack.Screen name="barcodeResult" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: "",
                HeaderRightButton: props => <HeaderRightButton {...props} />,
                headerShown: true,
            }} />
            <Stack.Screen name="menuScannerResult" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: "",
                HeaderRightButton: props => <HeaderRightButton {...props} />,
                headerShown: true,
            }} />
            <Stack.Screen name="menuScannerResultTim" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: "",
                HeaderRightButton: props => <HeaderRightButton {...props} />,
                headerShown: true,
            }} />
            <Stack.Screen name="menuScannerResultDetail" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: "",
                HeaderRightButton: props => <HeaderRightButton {...props} />,
                headerShown: true,
            }} />
            <Stack.Screen name="productNotfound" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: "Product Not Found",
                HeaderRightButton: props => <HeaderRightButton {...props} />,
                headerShown: true,
            }} />
            
        </Stack>

    )
}

export default StackLayout;