import { View, Text, StyleSheet, Image } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function GuideDetails({
	title,
	image,
	heading,
	description,
	onNext,
	showNextButton,
	onBack,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
			</View>
			{image && <Image source={image} style={styles.image} />}
			<Text style={styles.heading}>{heading}</Text>
			<Text style={styles.description}>{description}</Text>
			<View style={styles.arrowContainer}>
				{onBack && (
					<IconButton
						icon='arrow-left-bold'
						onPress={onBack}
						mode='contained'
						size={30}
						theme={{
							colors: {
								onPrimary: 'red',
								primary: '#000000',
								surfaceVariant:
									'#00c8a1',
							},
						}}
						style={styles.arrowButton}
					/>
				)}
				{showNextButton && (
					<IconButton
						icon='arrow-right-bold'
						onPress={onNext}
						mode='contained'
						size={30}
						theme={{
							colors: {
								onPrimary: 'red',
								primary: '#000000',
								surfaceVariant:
									'#00c8a1',
							},
						}}
						style={styles.arrowButton}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	header: {
		width: '100%',
		alignItems: 'center',
		marginBottom: 20,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	image: {
		width: 300,
		height: 170,
		borderRadius: 10,
		marginBottom: 20,
	},
	heading: {
		fontSize: 23,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	description: {
		fontSize: 15,
		textAlign: 'left',
		paddingHorizontal: 8,
		marginBottom: 30,
	},
	arrowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	arrowButton: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
});
