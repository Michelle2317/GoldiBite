import { View, StyleSheet, Image } from 'react-native';
import GuideCategory from '@/src/components/guides/GuideCategory';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export default function Guides() {
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: "Epipen",
		});
	  }, [navigation]);

	return (
		<View style={styles.container}>
			<Image
				source={require('@/assets/images/guides/epipen.png')}
				style={{ width: 370, height: 270 }}
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
	guideContainer: {
		marginTop: 28,
	},
});
