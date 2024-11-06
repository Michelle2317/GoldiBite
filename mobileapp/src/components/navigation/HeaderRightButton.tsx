import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

const HeaderRightButton = ({ name = 'Kaylie'}) => {
	return (
		<View style={styles.container}>
				<IconButton
					icon='account'
					size={28}
					style={styles.profileButton}
					iconColor='#000'
				/>
		</View>
	);
}


export default HeaderRightButton
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		marginLeft: 26,
	},
	text: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 25,
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 19,
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
