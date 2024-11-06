import { Tabs, Stack } from 'expo-router';

const StackLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerShown: false,
					tabBar: { visible: false },
					tabBarStyle: { display: 'none' },
				}}
			/>
		</Stack>
	);
};

export default StackLayout;
