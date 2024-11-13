import { View, StyleSheet, Image } from 'react-native';
import GuideCategory from '@/src/components/guides/GuideCategory';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Guides() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Image
				source={require('@/assets/images/guides/guide.svg')}
				style={{ width: 350, height: 320 }}
			/>
			<View style={styles.guideContainer} />
			<GuideCategory
				text='How to use an Epipen?'
				onPress={() => navigation.navigate('epipen')}
			/>
			<GuideCategory
				text='What is Anaphylaxis?'
				onPress={() =>
					navigation.navigate('anaphylaxis')
				}
			/>
			<GuideCategory
				text='Quick Travel Tips'
				onPress={() =>
					navigation.navigate('travelTips')
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'start',
		alignItems: 'center',
		marginTop: 30,
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
