import { View, StyleSheet, Image } from 'react-native';
import GuideCategory from '@/src/components/guides/GuideCategory';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Guides() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Image
				source={require('@/assets/images/guides/guide.png')}
				style={{ width: 370, height: 270 }}
			/>
			<View style={styles.guideContainer} />
			<GuideCategory
				text='How to Use an Epipen?'
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
		marginTop: 28,
	},
	guideContainer: {
		marginTop: 32,
	},
});
