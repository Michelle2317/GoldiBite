import { View, StyleSheet } from 'react-native';
import { Button, Text, IconButton, MD3Colors } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function UserToolBar({ name }) {
	return (
		<View style={styles.container}>
			<Text variant="headlineSmall" style={styles.text}>
				Hello {name},
			</Text>
			<View style={styles.buttonContainer}>
				<IconButton
					icon="account"
					mode='contained'
					size={20}
					onPress={() => console.log('Pressed')}
					theme={{ colors: {onPrimary:'red', primary: '#000000', surfaceVariant:'#BFEDDD' } }} 
					style={{width:60}}
				/>
				<IconButton
					icon="bell"
					mode='contained'
					size={20}
					onPress={() => console.log('Pressed')}
					theme={{ colors: {onPrimary:'blue', primary: '#000000', surfaceVariant:'rgba(210, 84, 9, 0.6)' } }} 
					style={{width:60}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 10,
		marginBottom: 20,
	},
	text: {
		flex: 1,
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 7,
	},
	profileButton: {
		backgroundColor: '#BFEDDD',
		width: 56,
		height: 28,
		marginRight: 8,
	},
	bellButton: {
		backgroundColor: "rgba(210, 84, 9, 0.6)",
		width: 56,
		height: 28,
	},
	buttonContent: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 10,
		paddingTop: 5,
	},
});
