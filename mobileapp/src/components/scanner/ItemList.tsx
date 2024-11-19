import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const demoData = [
	{
		id: '1',
		languageTitle: '意大利宽面鸡肉',
		title: 'Fettuccini Chicken',
		allergenStatus: 'No Allergen Detected',
		allergens: ['fish', 'egg', 'bread-slice'],
		quantity: 0,
		status: 'safe',
	},
	{
		id: '2',
		languageTitle: '意大利宽面鸡肉',
		title: 'Fettuccini Chicken',
		allergenStatus: 'Allergen Detected',
		allergens: ['fish', 'egg', 'bread-slice'],
		quantity: 0,
		status: 'danger',
	},
];

export default function ItemList() {
	const [data, setData] = useState(demoData);

	const handleQuantity = (id, action) => {
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
						size={28}
						iconColor={
							item.status === 'safe'
								? '#3D852F'
								: '#FF4342'
						}
					/>
				</View>

				<View style={styles.mainContentWrapper}>
					<View style={styles.languageTitleRow}>
						<Text
							style={
								styles.languageTitle
							}
						>
							{item.languageTitle}
						</Text>
						<View
							style={
								styles.allergensWrapper
							}
						>
							{item.allergens.map(
								(
									allergen,
									index
								) => {
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
											style={[
												styles.allergenCircle,
												{
													backgroundColor:
														item.status ===
														'safe'
															? '#D5CB44'
															: '#FF4342',
												},
											]}
										>
											<IconButton
												icon={
													iconName
												}
												size={
													15
												}
												iconColor={
													item.status ===
													'safe'
														? '#000'
														: '#FFF'
												}
												style={
													styles.allergenIcon
												}
											/>
										</View>
									);
								}
							)}
						</View>
					</View>

					<View>
						<Text>{item.title}</Text>
					</View>

					<Text style={styles.allergenStatus}>
						{item.allergenStatus}
					</Text>

					<View style={styles.quantityWrapper}>
						<IconButton
							icon='minus'
							size={24}
							onPress={() =>
								handleQuantity(
									item.id,
									'decrement'
								)
							}
						/>
						<Text
							style={{
								fontWeight: 'bold',
							}}
						>
							{item.quantity}
						</Text>
						<IconButton
							icon='plus'
							size={24}
							onPress={() =>
								handleQuantity(
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
						size={35}
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
}

const styles = StyleSheet.create({
	card: {
		width: 350,
		height: 90,
		borderRadius: 10,
		backgroundColor: '#fce4b6',
		elevation: 2,
		marginBottom: 10,
	},
	rowWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	statusWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	mainContentWrapper: {
		flex: 1,
	},
	languageTitle: {
		fontWeight: 'bold',
	},
	languageTitleRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		fontWeight: 'bold',
		marginTop: 10,
	},
	allergenStatus: {
		fontWeight: 'bold',
	},
	allergensWrapper: {
		flexDirection: 'row',
	},

	allergenCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 2,
	},
	allergenIcon: {
		margin: 0,
		padding: 0,
	},
	quantityWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: -15,
		marginLeft: -18,
	},

	chevronWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 8,
		marginBottom: 10,
	},
	chevronIcon: {
		margin: 0,
	},
});
