import { Tabs, Stack } from 'expo-router';
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
