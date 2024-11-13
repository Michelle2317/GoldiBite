import { Chip } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Chips = ({ text, isActive }) => {
	return (
		<Chip style={[styles.chip, isActive && styles.activeChip]}>
			{text}
		</Chip>
	);
};

const styles = StyleSheet.create({
	chip: {
		margin: 5,
		backgroundColor: '#fce4b6',
	},
	activeChip: {
		backgroundColor: '#ffcb63',
	},
});

export default Chips;
