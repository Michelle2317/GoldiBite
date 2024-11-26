import { Tabs, Stack } from 'expo-router'
import SegmentedButton from '../../../components/barcodeScanner/SegmentedButton'
import HeaderRightButton from '@/src/components/navigation/HeaderRightButton'
import { useTheme } from '@/src/hooks/useTheme';

const StackLayout = () => {
    const { colorScheme } = useTheme();
    const backgroundColor = colorScheme === 'light' ? '#F4EADA' : '#343434';
    const fontColor = colorScheme === 'light' ? '#000000' : '#ffffff';
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: backgroundColor,
                },
                headerTintColor: fontColor,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24,
                },
                headerShadowVisible: false
            }}>
            <Stack.Screen name="index" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: () => <SegmentedButton name="Barcode" />,
                headerShown: true,
                headerTintColor: 'unset',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />

            <Stack.Screen name="menuCamera" options={{
                headerBackTitle: 'Back',
                headerBackTitleStyle: { fontSize: 18 },
                headerTitle: () => <SegmentedButton name="Menu" />,
                headerShown: true,
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