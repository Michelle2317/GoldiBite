import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import ListCards from '@/src/components/barcodeScanner/ListCards';
import Chips from '@/src/components/barcodeScanner/Chips';

export default function OrderList() {
	const [chipStatus, setChipStatus] = useState({
		All: false,
		Breakfast: true,
		Lunch: false,
		Dinner: false,
	});

	useEffect(() => {
		setChipStatus((prevStatus) => ({
			...prevStatus,
			Breakfast: true,
		}));
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.chipContainer}>
				<Chips text='All' isActive={chipStatus.All} />
				<Chips
					text='Breakfast'
					isActive={chipStatus.Breakfast}
				/>
				<Chips
					text='Lunch'
					isActive={chipStatus.Lunch}
				/>
				<Chips
					text='Dinner'
					isActive={chipStatus.Dinner}
				/>
			</View>
			<ListCards />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 30,
	},
	chipContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginBottom: 20,
	},
});
