import { Stack } from 'expo-router';
import HeaderRightButton from '@/src/components/navigation/HeaderRightButton';

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
					fontSize: 28,
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
