import {
	View,
	Image,
	StyleSheet,
	ImageBackground,
	ScrollView,
	Dimensions,
} from 'react-native';
import { useState, useEffect } from 'react';
import UserToolBar from '@/src/components/homePage/UserToolBar';
import HomePageCards from '@/src/components/homePage/HomePageCards';
import { useNavigation } from '@react-navigation/native';
import UserStoreDataUtils from '../../utils/UserStoreDataUtils';
import { Text } from 'react-native-paper';
import PrimaryButton from '../../components/paperUiElement/PrimaryButton';

export default function Index() {
	const { getProfileName } = UserStoreDataUtils();
	const [name, setName] = useState('');
	const navigation = useNavigation();
	const screenWidth = Dimensions.get('window').width;

	useEffect(() => {
		const getUsername = async () => {
			const username = await getProfileName();
			setName(username);
		};
		getUsername();
	}, []);

	return (
		<ScrollView Style={styles.container}>
			<View style={styles.homeTop}>
				<ImageBackground
					source={require('@/assets/images/home/Home-scanner.jpg')}
					style={styles.homeTopImage}
					resizeMode={'cover'}
				>
					<View style={styles.homeTopTint}>
						<View style={styles.userStyle}>
							<UserToolBar
								name={name}
							/>
						</View>
						<View
							style={
								styles.homeTopScan
							}
						>
							<Image
								source={require('@/assets/images/home/Scan.gif')}
								style={[
									styles.gif,
									{
										width: screenWidth ,
									},
								]}
								resizeMode='contain'
							/>
							<PrimaryButton
								buttonText='Scan Now'
								callback={() =>
									navigation.navigate(
										'barcodeScanner'
									)
								}
							/>
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.homeBottom}>
				<View style={styles.textStyle}>
					<Text
						variant='titleLarge'
						style={{
							textAlign: 'left',
							marginBottom: 5,
							fontWeight: 'bold',
						}}
					>
						Emergency
					</Text>
					<Text
						variant='bodyMedium'
						style={{
							textAlign: 'left',
							marginBottom: 5,
							flexShrink: 1,
							maxWidth: '80vw',
						}}
					>
						Explore our emergency assistance
						for when you have a severe
						allergy reaction
					</Text>
				</View>
				<HomePageCards
					title=''
					backgroundImage={require('@/assets/images/home/Home-emergency.jpg')}
					width={350}
					height={140}
					borderRadius={10}
					onPress={() =>
						navigation.navigate('emergency')
					}
				/>
				<View style={styles.textStyle}>
					<Text
						variant='titleLarge'
						style={{
							textAlign: 'left',
							marginBottom: 5,
							fontWeight: 'bold',
						}}
					>
						Guides
					</Text>
					<Text
						variant='bodyMedium'
						style={{
							textAlign: 'left',
							marginBottom: 5,
							flexShrink: 1,
							maxWidth: '80vw',
						}}
					>
						Helpful information for food
						allergen problems when traveling
					</Text>
				</View>

				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.cardRow}
				>
					<HomePageCards
						title='What is Anaphylaxis'
						backgroundImage={require('@/assets/images/guides/whatIs.jpeg')}
						width={300}
						height={140}
						borderRadius={10}
						onPress={() =>
							navigation.navigate(
								'guides'
							)
						}
					/>
					<HomePageCards
						title='Quick Travel Tips'
						backgroundImage={require('@/assets/images/guides/lookInAdvanced.jpeg')}
						width={300}
						height={140}
						borderRadius={10}
						onPress={() =>
							navigation.navigate(
								'guides'
							)
						}
					/>
					<HomePageCards
						title='How to Use an Epipen'
						backgroundImage={require('@/assets/images/guides/prepare.jpeg')}
						width={300}
						height={140}
						borderRadius={10}
						onPress={() =>
							navigation.navigate(
								'guides'
							)
						}
					/>
				</ScrollView>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		gap: '10vh',
	},
	homeTop: {
		flex: 1,
		alignItems: 'center',
	},
	homeBottom: {
		flex: 1,
		alignItems: 'center',
	},
	homeTopScan: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		height:290
	},
	homeTopTint: {
		flex: 1,
		backgroundColor: 'rgba(55,55,55, 0.65)',
	},
	homeTopImage: {
		width: '100vw',
		height: '60vh',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		overflow: 'hidden',
	},
	gif: {
		marginTop: -12,
		height: 250,
		marginBottom: -6,
	},
	cardRow: {
		flexDirection: 'row',
		gap: 15,
		paddingHorizontal: 10,
		paddingBottom: 15,
	},
	userStyle: {
		marginTop: 60,
	},
	textStyle: {
		marginBottom: 10,
		marginTop: 10,
		marginLeft: 20,
	},
});
