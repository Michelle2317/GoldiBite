import { View, StyleSheet } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';

export default function HomePageCards({
	title,
	icon,
	description,
	cardColor,
	width,
	height,
	iconSize,
	iconColor,
	onPress,
}) {
	return (
		<Card
			style={[
				styles.card,
				{ backgroundColor: cardColor, width, height },
			]} 
			onPress={onPress} 
		>
			<Card.Content>
				<Text
					variant='titleMedium'
					style={styles.cardTitle}
				>
					{title}
				</Text>
				<View style={styles.iconContainer}>
					<IconButton
						icon={icon}
						size={iconSize}
						iconColor={iconColor}
					/>
				</View>
				<Text style={styles.cardDescription}>
					{description}
				</Text>
			</Card.Content>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
	},
	cardTitle: {
		fontSize: 22,
		marginBottom: 12,
		textAlign: 'left',
		fontWeight: 'bold',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 12,
	},
	cardDescription: {
		textAlign: 'left',
		fontSize: 15,
	},
});
