import { useState, useEffect, useRef } from 'react';
import {
	Animated,
	Easing,
	StyleSheet,
	View,
	Platform,
	Linking,
} from 'react-native';
import { Avatar, Text } from 'react-native-paper';

export default function SosButton({
	height = 280,
	width = 280,
	buttonBackgroundColor = '#ff4342',
	glowColor = '#ff7070',
	icon = 'phone',
	iconColor = '#fff',
}) {
	const [isPressed, setPressed] = useState(false);
	const glowAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (!isPressed) {
			const animation = Animated.loop(
				Animated.sequence([
					Animated.timing(glowAnim, {
						toValue: 1,
						duration: 1000,
						easing: Easing.inOut(
							Easing.ease
						),
						useNativeDriver: false,
					}),
					Animated.timing(glowAnim, {
						toValue: 0,
						duration: 1000,
						easing: Easing.inOut(
							Easing.ease
						),
						useNativeDriver: false,
					}),
				])
			);
			animation.start();
			return () => animation.stop();
		} else {
			glowAnim.stopAnimation();
		}
	}, [isPressed, glowAnim]);

	const glowBackgroundColor = glowAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [glowColor, '#ff7070'],
	});

	const glowScale = glowAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [1, 1.1],
	});

	const handlePressIn = () => {
		setPressed(true);
		makeSosCall();
	};

	const handlePressOut = () => {
		setPressed(false);
	};

	const makeSosCall = () => {
		if (Platform.OS === 'android') {
			Linking.openURL('tel:911');
		} else {
			Linking.openURL('telprompt:911');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<Animated.View
					style={[
						styles.glowBackground,
						{
							backgroundColor:
								glowBackgroundColor,
							transform: [
								{
									scale: glowScale,
								},
							],
						},
					]}
				/>
				<Avatar.Icon
					size={width}
					icon={icon}
					onTouchStart={handlePressIn}
					onTouchEnd={handlePressOut}
					style={[
						styles.button,
						{
							backgroundColor:
								buttonBackgroundColor,
						},
					]}
					color={iconColor}
				/>
			</View>
			<Text style={styles.text}>
				Contact Emergency Services
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	glowBackground: {
		position: 'absolute',
		width: 300,
		height: 300,
		borderRadius: 150,
		opacity: 0.7,
	},
	button: {
		backgroundColor: '#ff4342',
		borderRadius: 150,
	},
	text: {
		fontSize: 38,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 70,
	},
});
