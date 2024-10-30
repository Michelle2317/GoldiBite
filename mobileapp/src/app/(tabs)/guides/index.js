import { View, StyleSheet } from 'react-native';
import GuideCategory from "@/src/components/guides/GuideCategory";
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Guides() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.guideHeader}>
				<Text style={styles.headerText}>How to Help?</Text>
				<Text style={styles.headerText}>What to Learn?</Text>
				<Text style={styles.subHeaderText}>Explore our Guides</Text>
			</View>
			<View style={styles.guideContainer} />
			<GuideCategory text="How to use an Epipen?" onPress={() => navigation.navigate('epipen')} />
			<GuideCategory text="What is Anaphylaxis?" onPress={() => navigation.navigate('anaphylaxis')} />
			<GuideCategory text="Quick Travel Tips" onPress={() => navigation.navigate('travelTips')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'start',
		alignItems: 'center',
		marginTop: 20,
	},
	guideHeader: {
		width: 324,
		height: 180,
		backgroundColor: '#D5CB44',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	subHeaderText: {
		marginTop: 25,
		fontSize: 20,
		fontWeight: 'bold',
	},
	guideContainer: {
		marginTop: 28,
	},
});
