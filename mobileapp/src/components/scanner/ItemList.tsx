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

export default function ItemList({ dish }) {
	//const [data, setData] = useState(demoData);
	const safity = dish.allergens == undefined;

	const handleQuantity = () => {
		console.log("On Press")
	}
	// const handleQuantity = (id, action) => {
	// 	const updatedData = data.map((item) =>
	// 		dish.EnglishName === id
	// 			? {
	// 					...item,
	// 					quantity:
	// 						action === 'increment'
	// 							? item.quantity +
	// 							  1
	// 							: item.quantity >
	// 							  0
	// 							? item.quantity -
	// 							  1
	// 							: item.quantity,
	// 			  }
	// 			: item
	// 	);
	// 	setData(updatedData);
	// };
	//eggs,  milk,  mustard,  peanuts,  Crustaceans and molluscs,  fish,  sesame seeds,  soy,  sulphites,  tree nuts,  wheat and triticale
	const allergyIcon = {
		'egg': 'egg',
		'milk': 'milk',
		'mustard': 'bread-slice',
		'peanuts': 'circle',
		'Crustaceans and molluscs': 'circle',
		'fish': 'fish',
		'sesame seeds': ' circle',
		'soy': 'circle',
		'sulphites': 'circle',
		'tree nuts': 'circle',
		'wheat and triticale': 'circle'
	}

	// const allergenIconUI = dish.allergens.map((allergen, index) => {
	// 	return (
	// 		<View
	// 			key={
	// 				index
	// 			}
	// 			style={[
	// 				styles.allergenCircle,
	// 				{
	// 					backgroundColor: '#D5CB44',
	// 				},
	// 			]}
	// 		>
	// 			<IconButton
	// 				icon={
	// 					allergenIconUI[allergen]
	// 				}
	// 				size={
	// 					15
	// 				}
	// 				iconColor='#000'
	// 				style={
	// 					styles.allergenIcon
	// 				}
	// 			/>
	// 		</View>
	// 	);
	// })


	return (
		<>
			<Card style={styles.card}>
				<View style={styles.rowWrapper}>
					<View style={styles.statusWrapper}>
						<IconButton
							icon={
								safity === true
									? 'check-circle'
									: 'close-circle'
							}
							size={28}
							iconColor={
								safity === true
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
								{dish.OriginalName}
							</Text>
							<View
								style={
									styles.allergensWrapper
								}
							>

							</View>
						</View>

						<View>
							<Text>{dish.EnglishName}</Text>
						</View>

						<Text style={styles.allergenStatus}>
							{
								safity == true ? 'No Allergen Detected' : 'Allergen Detected'

							}
						</Text>

						<View style={styles.quantityWrapper}>
							<IconButton
								icon='minus'
								size={24}
								onPress={() =>
									handleQuantity(
										dish.EnglishName,
										'decrement'
									)
								}
							/>
							<Text
								style={{
									fontWeight: 'bold',
								}}
							> 0
							</Text>
							<IconButton
								icon='plus'
								size={24}
								onPress={() =>
									handleQuantity(
										dish.EnglishName,
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
		</>
	);

	// return (
	// 	<FlatList
	// 		data={data}
	// 		renderItem={renderItem}
	// 		keyExtractor={(item) => item.id}
	// 	/>
	// );
}

const styles = StyleSheet.create({
	card: {
		width: 330,
		borderRadius: 10,
		backgroundColor: '#fce4b6',
		elevation: 2,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10
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
