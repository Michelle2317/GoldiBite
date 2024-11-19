import { useState } from 'react';
import {
	View,
	StyleSheet,
	Platform,
	Linking,
	TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Text } from 'react-native-paper';

export default function EmergencyHome() {
	const [isPressed, setPressed] = useState(false);

	const handleCallHelp = () => {
		setPressed(!isPressed);
		makeSosCall();
	};

	const makeSosCall = () => {
		if (Platform.OS === 'android') {
			Linking.openURL('tel:6044345734');
		} else {
			Linking.openURL('telprompt:6044345734');
		}
	};

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
					Explore our emergency assistance for
					when you have a severe allergy reaction
				</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.heading}>
					Having an emergency?
				</Text>
				<TouchableOpacity
					style={styles.callButtonContent}
					onPress={handleCallHelp}
				>
					<IconButton
						icon='phone'
						size={28}
						iconColor='#fff'
					/>
					<Text style={styles.callButtonText}>
						Call Help Now
					</Text>
				</TouchableOpacity>
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
	callButtonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff4342',
		width: 230,
		height: 50,
		borderRadius: 100,
	},
	callButtonText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'center',
		marginRight: 18,
		marginLeft: -5,
	},
});
