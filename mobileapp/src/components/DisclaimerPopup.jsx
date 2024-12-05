import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

export default function DisclaimerPopup({ onClose }) {
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
						Notice
					</Text>
					<Text
						variant='bodyMedium'
						style={styles.description}
					>
						The information provided by the
						barcode scanner and menu scanner
						is gathered with the assistance
						of AI and machine learning and
						it can make mistakes. Check
						suspicious information
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
		height: 200,
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
