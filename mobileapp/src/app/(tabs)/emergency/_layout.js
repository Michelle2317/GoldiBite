import { Tabs, Stack } from 'expo-router';
import Header from '@/src/components/navigation/Header';
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
					fontSize: 24,
				},
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					headerShown: false,
					title: 'Emergency',
					headerTitle: (props) => (
						<Header {...props} />
					),
					HeaderRightButton: (props) => (
						<HeaderRightButton {...props} />
					),
				}}
			/>
		</Stack>
	);
};

export default StackLayout;
