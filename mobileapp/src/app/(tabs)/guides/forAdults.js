import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function ForAdults() {
	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.container}>
				<Image
					source={require('@/assets/images/guides/prepare.jpeg')}
					style={styles.image}
				/>

				<Text style={styles.subtitle}>
					Follow These Steps:
				</Text>

				<View style={styles.stepList}>
					<Text style={styles.step}>
						<Text style={styles.stepNumber}>
							1.
						</Text>{' '}
						Remove the auto-injector from
						its case.
					</Text>
					<Text style={styles.step}>
						<Text style={styles.stepNumber}>
							2.
						</Text>{' '}
						Take off the safety cap (usually
						blue) by pulling it straight up
						with your other hand. DO NOT use
						the thumb from the dominant
						hand.
					</Text>
					<Text style={styles.step}>
						<Text style={styles.stepNumber}>
							3.
						</Text>{' '}
						Hold the injector in your fist,
						orange tip facing down, and keep
						your arm at your side.
					</Text>
					<Text style={styles.step}>
						<Text style={styles.stepNumber}>
							4.
						</Text>{' '}
						Swing your arm outward, then
						bring it down quickly to push
						the orange tip into the side of
						your thigh.
					</Text>
					<Text style={styles.step}>
						<Text style={styles.stepNumber}>
							5.
						</Text>{' '}
						Hold it there, pressing down,
						for 3 seconds.
					</Text>
					<Text style={styles.step}>
						<Text style={styles.stepNumber}>
							6.
						</Text>{' '}
						Pull the auto-injector away from
						your thigh.
					</Text>
					<Text style={styles.step}>
						<Text style={styles.stepNumber}>
							7.
						</Text>{' '}
						Return it to the case and go
						immediately to the nearest
						hospital's emergency department
						for medical attention and safe
						disposal.
					</Text>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	container: {
		padding: 20,
		alignItems: 'center',
	},
	image: {
		width: 350,
		height: 180,
		marginBottom: 20,
		borderRadius: 10,
	},
	subtitle: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
	},
	stepList: {
		marginTop: 10,
		width: '90%',
	},
	step: {
		fontSize: 15,
		lineHeight: 24,
		marginBottom: 10,
		textAlign: 'left',
	},
	stepNumber: {
		fontWeight: 'bold',
	},
});
