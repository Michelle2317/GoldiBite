import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch, Divider } from 'react-native-paper';
import { useTheme } from '../../hooks/useTheme';

const ToggleTheme = () => {
	const { toggleTheme, isDark } = useTheme();
	const [isSwitchOn, setIsSwitchOn] = React.useState(isDark);

	const onToggleSwitch = () => {
		setIsSwitchOn(!isSwitchOn);
		toggleTheme();
	};

	return (
		<>
			<View style={styles.container}>
				<Text variant='titleLarge' style={styles.label}>
					Dark Mode
				</Text>
				<Switch
					value={isSwitchOn}
					onValueChange={onToggleSwitch}
					style={styles.switch}
				/>
			</View>
			<Divider style={styles.dividerStyle} />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	label: {
		marginLeft: 14,
		fontWeight: 'bold',
		flex: 2,
		height: 25,
	},
	switch: {
		marginRight: 10,
	},
	dividerStyle: {},
});

export default ToggleTheme;
