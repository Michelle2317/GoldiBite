import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

export default function EmergencyPopup({ onClose }) {
	return (
		<Modal
			transparent={true}
			animationType='fade'
			visible={true}
			onRequestClose={onClose}
		>
			<View style={styles.overlay}>
				<View style={styles.popup}>
					<TouchableOpacity
						style={styles.closeButton}
						onPress={onClose}
					>
						<IconButton
							icon='close-circle-outline'
							size={32}
							onPress={onClose}
							color='#000'
						/>
					</TouchableOpacity>
					<Text
						variant='titleMedium'
						style={styles.title}
					>
						Why Do We Have This Option?
					</Text>
					<Text
						variant='bodyMedium'
						style={styles.description}
					>
						Our call option offers immediate
						assistance in emergencies,
						including sudden medical
						incidents like strokes. When
						clicked, the button connects
						travellers to emergency services
						by dialing the appropriate
						number based on their location
						(e.g., 911 in the United
						States).
					</Text>
				</View>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	popup: {
		width: 345,
		height: 270,
		backgroundColor: 'white',
		borderColor: '#ff4342',
		borderWidth: 2,
		borderRadius: 10,
		padding: 20,
	},
	closeButton: {
		position: 'absolute',
		top: 5,
		right: 5,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginLeft: 50,
		marginTop: 5,
		marginBottom: 15,
		width: '60%',
	},
	description: {
		textAlign: 'left',
	},
});
