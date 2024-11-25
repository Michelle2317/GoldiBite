import { Tabs, Stack } from 'expo-router';

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
					fontSize: 24,
				},
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					headerShown: true,
					title: 'Emergency',
				}}
			/>
		</Stack>
	);
};

export default StackLayout;
