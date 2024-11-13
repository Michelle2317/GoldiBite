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
					fontSize: 36,
				},
				headerShadowVisible: false,
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					headerTitle: 'Explore Our Guides',
					HeaderRightButton: (props) => (
						<HeaderRightButton {...props} />
					),
				}}
			/>
			<Stack.Screen
				name='anaphylaxis'
				options={{
					headerTitle: 'Anaphylaxis',
					HeaderRightButton: (props) => (
						<HeaderRightButton {...props} />
					),
				}}
			/>
			<Stack.Screen
				name='travelTips'
				options={{
					headerTitle: 'Quick Travel Tips',
					HeaderRightButton: (props) => (
						<HeaderRightButton {...props} />
					),
				}}
			/>
			<Stack.Screen
				name='epipen'
				options={{
					headerTitle: 'Epipen',
					HeaderRightButton: (props) => (
						<HeaderRightButton {...props} />
					),
				}}
			/>
			<Stack.Screen
				name='forAdults'
				options={{
					headerTitle: 'For Adults',
					HeaderRightButton: (props) => (
						<HeaderRightButton {...props} />
					),
				}}
			/>
			<Stack.Screen
				name='forChildren'
				options={{
					headerTitle: 'For Children',
					HeaderRightButton: (props) => (
						<HeaderRightButton {...props} />
					),
				}}
			/>
		</Stack>
	);
};

export default StackLayout;
