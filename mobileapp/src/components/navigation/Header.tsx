import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

const Header = ({ name = '12345678'}) => {
	return (
		<View style={styles.container}>
			<Text variant='titleMedium' style={styles.text}>
				Hello {name},
			</Text>
			<View style={styles.buttonContainer}>
				<IconButton
					icon='account'
					size={28}
					style={styles.profileButton}
					iconColor='#000'
				/>
			</View>
		</View>
	);
}


export default Header
const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 25,
	},
	buttonContainer: {
		flex:1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	profileButton: {
		backgroundColor: '#BFEDDD',
		width: 66,
		height: 38,
	},
	bellButton: {
		backgroundColor: '#e6a177',
		width: 66,
		height: 38,
	},
});
