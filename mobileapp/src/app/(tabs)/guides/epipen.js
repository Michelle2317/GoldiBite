import { View, StyleSheet, Image } from 'react-native';
import GuideCategory from '@/src/components/guides/GuideCategory';
import { useNavigation } from '@react-navigation/native';

export default function Guides() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Image
				source={require('@/assets/images/guides/epipen.png')}
				style={{ width: 350, height: 320 }}
			/>
			<View style={styles.guideContainer} />
			<GuideCategory
				text='For Adults'
				onPress={() => navigation.navigate('forAdults')}
			/>
			<GuideCategory
				text='For Children'
				onPress={() =>
					navigation.navigate('forChildren')
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
