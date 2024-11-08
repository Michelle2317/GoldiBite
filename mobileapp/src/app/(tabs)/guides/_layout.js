import { Tabs, Stack } from 'expo-router'
import Header from '@/src/components/navigation/Header';
import HeaderRightButton from '@/src/components/navigation/HeaderRightButton'

const StackLayout = () => {
    return (
        <Stack   screenOptions={{
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
                headerTitle: 'Guides',
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }}
            />
            <Stack.Screen name="anaphylaxis" options={{
                headerTitle: 'Anaphylaxis',
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }} />
            <Stack.Screen name="epipen" options={{
                headerTitle: 'How to Use an Epipen',
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }} />
            <Stack.Screen name="travelTips" options={{
                headerTitle: 'Quick Travel Tips',
                HeaderRightButton: props => <HeaderRightButton {...props} />
            }} />
        </Stack>

    )
}

export default StackLayout;