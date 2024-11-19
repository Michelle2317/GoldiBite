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
import Carousel from '@/src/components/homePage/Carousel';
import EmergencyHome from '@/src/components/homePage/EmergencyHome';
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
		<ScrollView contentContainerStyle={styles.container}>
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
										width: screenWidth,
									},
								]}
								resizeMode='contain'
							/>
							<Text
								variant='titleMedium'
								style={{
									color: '#fff',
									width: '50%',
									textAlign: 'center',
									marginBottom: 15,
								}}
							>
								Quickly scan
								your product or
								menu for
								allergens
							</Text>
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
			<View style={{ marginTop: 510, marginBottom: -200 }}>
				<Carousel />
				<EmergencyHome />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	homeTop: {
		flex: 1,
		alignItems: 'center',
	},
	homeTopScan: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		marginTop: -5,
	},
	homeTopTint: {
		flex: 1,
		backgroundColor: 'rgba(55,55,55, 0.65)',
	},
	homeTopImage: {
		width: '100%',
		height: 480,
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
});
