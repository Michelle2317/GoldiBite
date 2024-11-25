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
import LottieView from 'lottie-react-native';

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

	const handleCarouselNavigate = (screen) => {
		navigation.navigate('guides', { screen });
	};

	return (
		<ScrollView
			contentContainerStyle={styles.scrollContentContainer}
			showsVerticalScrollIndicator={false}
		>
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
							<LottieView
								source={require('@/assets/images/home/animation.json')}
								autoPlay
								loop
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
			<View style={styles.bottomContent}>
				<Carousel onNavigate={handleCarouselNavigate} />
				<View style={styles.emergencyContent}>
					<EmergencyHome />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContentContainer: {
		flexGrow: 1,
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
		height: 500,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		overflow: 'hidden',
	},
	gif: {
		marginTop: -12,
		height: 250,
		marginBottom: -6,
	},
	bottomContent: {
		marginTop: 40,
	},
	emergencyContent: {
		marginTop: 20,
		marginBottom: 20,
	},
	userStyle: {
		marginTop: 60,
	},
});
