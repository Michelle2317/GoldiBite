import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function GuideCategory({ text, onPress }) {
	return (
		<TouchableOpacity
			style={styles.categoryContainer}
			onPress={onPress}
		>
			<View style={styles.row}>
				<Text style={styles.categoryText}>{text}</Text>
				<IconButton
					icon='chevron-right'
					size={42}
					iconColor='#000'
					style={styles.chevronIcon}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	categoryContainer: {
		padding: 20,
		marginVertical: 8,
		backgroundColor: '#FCE4B6',
		borderRadius: 10,
		width: 350,
		height: 80,
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	categoryText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	chevronIcon: {
		margin: 0,
	},
});
