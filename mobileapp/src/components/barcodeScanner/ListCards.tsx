import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, Text } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const demoData = [
	{
		id: '1',
		title: 'Fettuccini Chicken',
		allergenStatus: 'No Allergen Detected',
		allergens: ['fish', 'egg', 'bread-slice'],
		quantity: 0,
		status: 'safe',
	},
	{
		id: '2',
		title: 'Fettuccini Chicken',
		allergenStatus: 'No Allergen Detected',
		allergens: ['fish', 'egg', 'bread-slice'],
		quantity: 0,
		status: 'danger',
	},
];

const ListCards = () => {
	const [data, setData] = useState(demoData);

	const handleTitle = (id, newTitle) => {
		const updatedData = data.map((item) =>
			item.id === id ? { ...item, title: newTitle } : item
		);
		setData(updatedData);
	};

	const handleAllergenStatus = (id, newStatus) => {
		const updatedData = data.map((item) =>
			item.id === id
				? { ...item, allergenStatus: newStatus }
				: item
		);
		setData(updatedData);
	};

	const handleQuantityChange = (id, action) => {
		const updatedData = data.map((item) =>
			item.id === id
				? {
						...item,
						quantity:
							action === 'increment'
								? item.quantity +
								  1
								: item.quantity >
								  0
								? item.quantity -
								  1
								: item.quantity,
				  }
				: item
		);
		setData(updatedData);
	};

	const renderItem = ({ item }) => (
		<Card style={styles.card}>
			<View style={styles.rowWrapper}>
				<View style={styles.statusWrapper}>
					<IconButton
						icon={
							item.status === 'safe'
								? 'check-circle'
								: 'close-circle'
						}
						size={24}
						iconColor={
							item.status === 'safe'
								? '#3D852F'
								: '#FF4342'
						}
					/>
				</View>

				<View style={styles.mainContentWrapper}>
					<TextInput
						value={item.title}
						onChangeText={(newTitle) =>
							handleTitle(
								item.id,
								newTitle
							)
						}
						style={styles.title}
					/>
					<TextInput
						value={item.allergenStatus}
						onChangeText={(newStatus) =>
							handleAllergenStatus(
								item.id,
								newStatus
							)
						}
						style={styles.allergenStatus}
					/>
					<View style={styles.allergensWrapper}>
						{item.allergens.map(
							(allergen, index) => {
								let iconName;
								switch (
									allergen
								) {
									case 'fish':
										iconName =
											'fish';
										break;
									case 'egg':
										iconName =
											'egg';
										break;
									case 'bread-slice':
										iconName =
											'bread-slice';
										break;
									default:
										iconName =
											'circle';
										break;
								}

								return (
									<View
										key={
											index
										}
										style={
											styles.allergenIconWrapper
										}
									>
										<IconButton
											icon={
												iconName
											}
											size={
												13
											}
											iconColor='#000'
											style={
												styles.allergenIcon
											}
										/>
									</View>
								);
							}
						)}
					</View>
					<View style={styles.quantityWrapper}>
						<IconButton
							icon='minus'
							size={16}
							onPress={() =>
								handleQuantityChange(
									item.id,
									'decrement'
								)
							}
						/>
						<Text
							style={
								styles.quantityAmount
							}
						>
							{item.quantity}
						</Text>
						<IconButton
							icon='plus'
							size={16}
							onPress={() =>
								handleQuantityChange(
									item.id,
									'increment'
								)
							}
						/>
					</View>
				</View>
				<View style={styles.chevronWrapper}>
					<IconButton
						icon='chevron-right'
						size={20}
						iconColor='#000'
						style={styles.chevronIcon}
					/>
				</View>
			</View>
		</Card>
	);

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
		/>
	);
};

const styles = StyleSheet.create({
	card: {
		width: 324,
		height: 88,
		borderRadius: 10,
		backgroundColor: '#fce4b6',
		elevation: 3,
		flexDirection: 'row',
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	rowWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	statusWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainContentWrapper: {
		justifyContent: 'space-evenly',
		paddingLeft: 10,
		paddingTop: 6,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 14,
	},
	allergenStatus: {
		fontSize: 10,
	},
	allergensWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
	},
	allergenIcon: {
		margin: 0,
		paddingRight: 15,
	},
	quantityWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: -15,
		marginTop: -16,
	},
	quantityAmount: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	chevronWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	chevronIcon: {
		marginLeft: 20,
	},
});

export default ListCards;
