import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	Linking,
	TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';

export default function Emergency() {
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
			<View style={styles.container}>
				<Text style={styles.heading}>
					Having an Emergency?
				</Text>
				<TouchableOpacity
					style={styles.callButtonContent}
					onPress={handleCallHelp}
				>
					<IconButton
						icon='phone'
						size={28}
						iconColor='#fff'
						style={styles.callButtonIcon}
					/>
					<Text style={styles.callButtonText}>
						Call Help Now
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>
					Why Do We Have This Option?
				</Text>
				<Text style={styles.info}>
					Our call option offers immediate
					assistance in emergencies, including
					sudden medical incidents like strokes.
					When clicked, the button connects
					travellers to emergency services by
					dialing the appropriate number based on
					their location (e.g., 911 in the United
					States).
				</Text>
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
		width: 320,
		height: 348,
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
		marginBottom: 50,
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
	textContainer: {
		padding: 58,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'left',
		marginTop: -24,
		marginBottom: 5,
	},
	info: {
		fontSize: 15,
		textAlign: 'left',
	},
});
