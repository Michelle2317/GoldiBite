import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function UserToolBar({ name }) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text variant='headlineSmall' style={styles.text}>
				Hello {name},
			</Text>
			<View style={styles.buttonContainer}>
				<IconButton
					icon='account'
					size={28}
					style={styles.profileButton}
					iconColor='#000'
					onPress={() => navigation.navigate('setting')}
				/>
				<IconButton
					icon='bell'
					size={25}
					style={styles.bellButton}
					iconColor='#000'
					onPress={() => navigation.navigate('notification')}
				/>
			</View>
		</View>
	);
}

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
