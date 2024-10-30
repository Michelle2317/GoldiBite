import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function GuideCategory({ text, onPress }) {
	return (
		<TouchableOpacity style={styles.categoryContainer} onPress={onPress}>
			<Text style={styles.categoryText}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	categoryContainer: {
		padding: 20,
		marginVertical: 10,
		backgroundColor: '#beeddd',
		borderRadius: 10,
		width: 324,
		height: 80,
                justifyContent: 'center',
	},
	categoryText: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		width: '100%',
	},
});
