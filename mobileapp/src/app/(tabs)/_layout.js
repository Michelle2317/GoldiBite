import { Tabs } from 'expo-router';
import { Icon } from 'react-native-paper';
import { useTheme } from '../../hooks/useTheme';

export default function TabLayout() {
	const { colorScheme } = useTheme();

	const tabBarStyle =
		colorScheme === 'light'
			? { backgroundColor: '#FFC858' }
			: { backgroundColor: '#000' };
	const tabBarActiveTintColor =
		colorScheme === 'light' ? '#fff' : '#FFC858';
	const tabBarInactiveTintColor =
		colorScheme === 'light' ? '#1C1B1F' : '#FFC858';

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor,
				tabBarInactiveTintColor,
				tabBarStyle,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							source={
								focused
									? 'home'
									: 'home-outline'
							}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='emergency'
				options={{
					title: 'Emergency',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							source={
								focused
									? 'alarm-light'
									: 'alarm-light-outline'
							}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='barcodeScanner'
				options={{
					title: 'Barcode Scanner',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							source={
								focused
									? 'barcode-scan'
									: 'barcode-scan'
							}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='guides'
				options={{
					title: 'Guides',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							source={
								focused
									? 'book-open-variant'
									: 'book-open-blank-variant'
							}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='setting'
				options={{
					title: 'Settings',
					href: 'setting',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Icon
							source={
								focused
									? 'cog'
									: 'cog-outline'
							}
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
