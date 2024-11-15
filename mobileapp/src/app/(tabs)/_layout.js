import { Tabs, router, useSegments } from 'expo-router';
import { Icon } from 'react-native-paper';
import { useTheme } from '../../hooks/useTheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
	const { colorScheme } = useTheme();
	const segments = useSegments();
	const tabBarStyle =
		colorScheme === 'light'
			? { backgroundColor: '#FFC858' }
			: { backgroundColor: '#000' };
			const backgroundColor = colorScheme === 'light'? '#FFC858':'#000';
	const tabBarActiveTintColor =
		colorScheme === 'light' ? '#000' : '#FFC858';
	const tabBarInactiveTintColor =
		colorScheme === 'light' ? '#1C1B1F' : '#FFC858';

	const displayTabbar = segments[2] === 'menuCamera' || segments[2] === undefined ? 'none' : 'flex';
	
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
					title: 'Scan',
					tabBarStyle: {
						display: displayTabbar,
						backgroundColor:backgroundColor
					},
					tabBarActiveTintColor:tabBarActiveTintColor,
					tabBarInactiveTintColor:tabBarInactiveTintColor,
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={
								focused
									? 'barcode'
									: 'barcode-outline'
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
									? 'book'
									: 'book-outline'
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
