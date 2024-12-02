import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

export default function ItemList({ dish, safity, alertAllergies }) {
	//const [data, setData] = useState(demoData);


	return (
		<>
			<Card style={styles2.cardContainer}>
				<View style={styles2.analystContainer}>
					{
						safity ? (
							<View style={styles2.safeCheckmark}>
								<IconButton
									icon='check'
									size={28}
									iconColor='#ffffff'
								/>
								<Text variant='labelMedium' style={{ color: "#fff" }}>Safe!</Text>
							</View>
						) : (
							<View style={styles2.cautionCheckmark}>
								<IconButton
									icon='close'
									size={28}
									iconColor='#ffffff'
								/>
								<Text variant='labelMedium' style={{ color: "#fff" }}>Caution!</Text>
							</View>
						)
					}
					<View style={styles2.menuContentContainer}>
						<Text variant='titleMedium' style={styles2.text}>{dish.EnglishName}</Text>
						<Text variant='titleMedium' style={styles2.text}>{dish.OriginalName}</Text>
						<Text variant='labelMedium' >
							{safity ? 'No Allergen Detected' : 'Allergen Detected:'}
						</Text>
						<Text variant='labelMedium' >
							{
								alertAllergies.filter((item) => item.selected == true).map(item => item.name).filter((item) => dish.allergens.map((item) => item.toUpperCase()).includes(item.toUpperCase())).join(", ")
							}
						</Text>
					</View>
				</View>
			</Card>
		</>
	);
}

const styles2 = StyleSheet.create({
	cardContainer: {
		flex: 1,
		borderRadius: 10,
		backgroundColor: '#fce4b6',
		elevation: 2,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
	},
	analystContainer: {
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		justifyContent: "flex-start",
	},
	cautionCheckmark: {
		flex: 0,
		backgroundColor: "#FF4342",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		padding: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	safeCheckmark: {
		flex: 0,
		backgroundColor: "#3D852F",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		padding: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	menuContentContainer: {
		flex: 0,
		flexGrow: 0,
		borderTopEndRadius: 10,
		padding: 10,
	},
	bg1: {
		backgroundColor: "#3D852F"
	},
	bg2: {
		backgroundColor: "#FF4342"
	},
	text: {
		width: 200,
		flexWrap: 'wrap',
	}
})