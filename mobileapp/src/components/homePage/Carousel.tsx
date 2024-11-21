import { useState, useEffect, useRef } from 'react';
import {
	View,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-paper';

export default function Carousel({ onNavigate }) {
	const scrollViewRef = useRef(null);
	const imageWidth = 292;
	const images = [
		{
			source: require('@/assets/images/guides/whatIs.jpeg'),
			text: 'What is Anaphylaxis?',
			route: 'anaphylaxis',
		},
		{
			source: require('@/assets/images/guides/lookInAdvanced.jpeg'),
			text: 'Quick Travel Tips',
			route: 'travelTips',
		},
		{
			source: require('@/assets/images/guides/prepare.jpeg'),
			text: 'How to Use an Epipen',
			route: 'epipen',
		},
	];

	const duplicatedImages = [...images, ...images];

	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (scrollViewRef.current) {
				const newScrollPosition =
					scrollPosition + imageWidth;

				if (
					newScrollPosition >=
					duplicatedImages.length * imageWidth
				) {
					scrollViewRef.current.scrollTo({
						x: 0,
						animated: false,
					});
					setScrollPosition(0);
				} else {
					scrollViewRef.current.scrollTo({
						x: newScrollPosition,
						animated: true,
					});
					setScrollPosition(newScrollPosition);
				}
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [scrollPosition]);

	return (
		<View style={styles.centerContainer}>
			<View>
				<Text
					variant='titleLarge'
					style={styles.titleText}
				>
					Guides
				</Text>
				<Text
					variant='bodyMedium'
					style={styles.bodyText}
				>
					Helpful information for managing food allergies while travelling
				</Text>

				<ScrollView
					ref={scrollViewRef}
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.scrollContainer}
					contentOffset={{
						x: imageWidth * images.length,
					}}
					scrollEventThrottle={16}
				>
					{duplicatedImages.map(
						(image, index) => (
							<TouchableOpacity
								key={index}
								style={
									styles.imageContainer
								}
								onPress={() =>
									onNavigate(
										image.route
									)
								}
							>
								<Image
									source={
										image.source
									}
									style={
										styles.image
									}
								/>
								<Text
									style={
										styles.imageText
									}
								>
									{
										image.text
									}
								</Text>
							</TouchableOpacity>
						)
					)}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	centerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontWeight: 'bold',
		textAlign: 'left',
		marginLeft: 29,
	},
	bodyText: {
		textAlign: 'left',
		marginBottom: 10,
		marginLeft: 29,
	},
	scrollContainer: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	imageContainer: {
		position: 'relative',
		marginRight: 10,
	},
	image: {
		width: 292,
		height: 120,
		borderRadius: 10,
	},
	imageText: {
		position: 'absolute',
		top: 10,
		left: 10,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
