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
							size={30}
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
						Our Call option provides
						immediate assistance in
						emergency situations, including
						sudden medical incidents like
						strokes. When clicked, the
						button connects users with
						emergency services, dialing the
						appropriate number based on
						their location (e.g., 911 in the
						United States). Additionally, an
						emergency notification is sent
						to emergency contacts, ensuring
						they are alerted in real time.
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
		width: 330,
		height: 324,
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
		marginTop: 10,
		marginBottom: 10,
		width: '60%',
	},
	description: {
		textAlign: 'left',
	},
});
