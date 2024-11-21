import { View, Text, StyleSheet, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import PrimaryButton from "../../components/paperUiElement/PrimaryButton";

export default function GuideDetails({
	title,
	image,
	heading,
	description,
	onNext,
	showNextButton,
	onBack,
	onBackToGuides, 
}) {
	return (
		<View style={styles.container}>
			{/* <View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
			</View> */}
			{image && <Image source={image} style={styles.image} />}
			<Text style={styles.heading}>{heading}</Text>
			<Text style={styles.description}>{description}</Text>

			<View style={styles.buttonContainer}>
				<View>
					{showNextButton ? (
						<PrimaryButton buttonText={"Next"} callback={onNext} />
						) : onBackToGuides ? (
						<PrimaryButton buttonText={"Back to Guides"} callback={onBackToGuides} />
						) : null}				
				</View>
				<View>
					{onBack && <PrimaryButton buttonText={"Back"} callback={onBack} type="secondary" />}

				</View>
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
		marginTop: -40,
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
		width: 340,
		height: 200,
		borderRadius: 10,
		marginBottom: 20,
	},
	heading: {
		fontSize: 23,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
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

	buttonContainer: {
		flex: 1,
		display: "flex",
		width: "100%",
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
});
