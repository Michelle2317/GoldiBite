import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SosButton from '@/src/components/SosButton';
import { IconButton } from 'react-native-paper';
import EmergencyPopup from '@/src/components/EmergencyPopup';

export default function Emergency() {
	// const [isModalVisible, setIsModalVisible] = useState(false);

	// const toggleModal = () => {
	// 	setIsModalVisible(!isModalVisible);
	// };
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

	return (
		<View style={styles.centerContainer}>
			<IconButton
				icon='information-outline'
				size={35}
				onPress={showDialog}
				color='black'
				style={styles.informationButton}
			/>
			<SosButton />

			<EmergencyPopup visible={visible} hideDialog={hideDialog} />
		</View>
	);
}

const styles = StyleSheet.create({
	centerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	informationButton: {
		position: 'absolute',
		top: -15,
		right: 15,
	},
});
