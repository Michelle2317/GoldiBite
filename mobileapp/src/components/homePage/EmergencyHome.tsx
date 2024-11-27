import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';

export default function EmergencyHome() {
	return (
		<View style={styles.centerContainer}>
			<View style={{ margin: 10 }}>
				<Text
					variant='titleLarge'
					style={{
						fontWeight: 'bold',
						textAlign: 'left',
					}}
				>
					Emergency Assistant
				</Text>
				<Text
					variant='bodyMedium'
					style={{ textAlign: 'left' }}
				>
					Contact emergency assistance when you
					have a severe allergy reaction
				</Text>
				<Image
					source={require('@/assets/images/home/emergency.jpg')}
					style={{
						width: 340,
						height: 140,
						borderRadius: 10,
						alignSelf: 'center',
						marginTop: 10,
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	centerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		width: 375,
		height: 276,
		backgroundColor: '#beeddd',
		borderRadius: 12,
		padding: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 30,
	},
});
