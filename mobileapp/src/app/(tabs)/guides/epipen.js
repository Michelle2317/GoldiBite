import { ScorllView, View, Text, StyleSheet, Image } from 'react-native';

export default function Epipen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>How to use an Epipen?</Text>

			<Image
				source={require('@/assets/images/guides/prepare.jpeg')}
				style={styles.image}
			/>

			<Text style={styles.subtitle}>Follow these steps:</Text>

			<View style={styles.stepList}>
				<Text style={styles.step}>
					<Text style={styles.stepNumber}>
						1.
					</Text>{' '}
					Remove the auto-injector from its case.
				</Text>
				<Text style={styles.step}>
					<Text style={styles.stepNumber}>
						2.
					</Text>{' '}
					Take off the safety cap (usually blue)
					by pulling it straight up with your
					other hand. DO NOT use the thumb from
					the dominant hand.
				</Text>
				<Text style={styles.step}>
					<Text style={styles.stepNumber}>
						3.
					</Text>{' '}
					Hold the injector in your fist, orange
					tip facing down, and keep your arm at
					your side.
				</Text>
				<Text style={styles.step}>
					<Text style={styles.stepNumber}>
						4.
					</Text>{' '}
					Swing your arm outward, then bring it
					down quickly to push the orange tip into
					the side of your thigh.
				</Text>
				<Text style={styles.step}>
					<Text style={styles.stepNumber}>
						5.
					</Text>{' '}
					Hold it there, pressing down, for 3
					seconds.
				</Text>
				<Text style={styles.step}>
					<Text style={styles.stepNumber}>
						6.
					</Text>{' '}
					Pull the auto-injector away from your
					thigh.
				</Text>
				<Text style={styles.step}>
					<Text style={styles.stepNumber}>
						7.
					</Text>{' '}
					Return it to the case and go immediately
					to the nearest hospital's emergency
					department for medical attention and
					safe disposal.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		// backgroundColor: '#f9f9f9',
		alignItems: 'center',
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 15,
		textAlign: 'center',
	},
	image: {
		width: 350,
		height: 180,
		marginBottom: 20,
		borderRadius: 10,
	},
	subtitle: {
		fontSize: 25,
		fontWeight: '600',
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
