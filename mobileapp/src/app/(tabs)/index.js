import { View, StyleSheet } from 'react-native';
import UserToolBar from '@/src/components/homePage/UserToolBar';
import HomePageCards from '@/src/components/homePage/HomePageCards';

export default function Index() {
	const name = 'Kaylie';

	return (
		<View style={styles.container}>
			<UserToolBar name={name} />
			<HomePageCards
				title='Allergen Scanner'
				icon='barcode-scan'
				description='Scan barcode or menus to get instant results and make safe choices.'
				cardColor='#beeddd'
				width={350}
				height={270}
				iconSize={110}
				iconColor='#cf7334'
			/>
			<View style={styles.cardRow}>
				<HomePageCards
					title='Emergency'
					icon='alarm-light'
					description='Explore our emergency assistance for when you have a severe allergy reaction.'
					cardColor='#fedc9d'
					width={165}
					height={308}
					iconSize={93}
					iconColor='#cf7334'
				/>
				<HomePageCards
					title='Guides'
					icon='book'
					description='Helpful information for food allergen problems when traveling'
					cardColor='#eae1a0'
					width={165}
					height={308}
					iconSize={93}
					iconColor='#00c8a1'
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 20,
		marginTop: 22,
	},
});
