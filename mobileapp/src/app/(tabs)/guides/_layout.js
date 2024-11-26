import { Stack } from 'expo-router';
import HeaderRightButton from '@/src/components/navigation/HeaderRightButton';
import { useTheme } from '@/src/hooks/useTheme';

const StackLayout = () => {
	const { colorScheme } = useTheme();
    const backgroundColor = colorScheme === 'light'? '#F4EADA':'#343434';
    const fontColor = colorScheme === 'light'? '#000000':'#ffffff';
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
				headerShadowVisible: false,
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					headerBackTitle:'Back',
					headerTitle: 'Explore Our Guides',
				}}
			/>
			<Stack.Screen
				name='anaphylaxis'
				options={{
					headerBackTitle:'Back',
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name='travelTips'
				options={{
					headerBackTitle:'Back',
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name='epipen'
				options={{
					headerBackTitle:'Back',
					headerTitle: 'Epipen',
				}}
			/>
			<Stack.Screen
				name='forAdults'
				options={{
					headerBackTitle:'Back',
					headerTitle: 'For Adults',
				}}
			/>
			<Stack.Screen
				name='forChildren'
				options={{
					headerBackTitle:'Back',
					headerTitle: 'For Children',
				}}
			/>
		</Stack>
	);
};

export default StackLayout;
