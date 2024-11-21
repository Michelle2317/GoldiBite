import { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GuideDetails from '@/src/components/guides/GuideDetails';

const steps = [
	{
		title: 'Tip 1',
		image: require('@/assets/images/guides/lookInAdvanced.jpeg'),
		heading: 'Research Local Restaurants',
		description:
			'To dine safely while traveling with food allergies, research 2-3 nearby restaurants as backup options. Even with thorough vetting, some places may not be as allergy-aware as expected, so having alternatives helps avoid disappointment.',
	},
	{
		title: 'Tip 2',
		image: require('@/assets/images/guides/bookFriendly.jpeg'),
		heading: 'Cook Your Own Food When Possible',
		description:
			'The safest way to travel with food allergies is to prepare your own meals. This allows you to control every ingredient and cooking process, eliminating the risk of relying on others knowledge of allergies, and ensuring a worry-free trip.',
	},
	{
		title: 'Tip 3',
		image: require('@/assets/images/guides/medicalFacilities.jpeg'),
		heading: 'Buy Travel Medical Insurance',
		description:
			'When traveling internationally with a nut allergy or any food allergy, it’s essential to purchase travel medical insurance. This coverage can help mitigate the high costs of hospitalization in case of a severe reaction, which can be financially burdensome. \n\nPrioritize your safety by planning ahead and ensuring you have the necessary protections in place for a worry-free trip.',
	},
	{
		title: 'Tip 4',
		image: require('@/assets/images/guides/tip4.jpeg'),
		heading: 'Prepare Allergy Cards in the Local Language',
		description:
			"If you're traveling to a country where the language differs from your own, bring an allergy translation card. This card will help you communicate your allergies clearly, ensuring that restaurant staff and others understand your dietary needs, which is crucial for your safety. \n\nHaving this tool on hand makes dining out and navigating food options much easier while you travel.",
	},
	{
		title: 'Tip 5',
		image: require('@/assets/images/guides/tip5.jpeg'),
		heading: 'Travelling With Allergies',
		description:
			'Traveling abroad with a nut allergy or any food allergy—requires similar precautions. Whether your allergy is to nuts, peanuts, dairy, wheat, or Celiac disease, the key is to plan and pack foods that suit your needs. \n\nCooking for yourself offers the most control, allowing you to avoid the risk of cross-contamination and ensure food safety. Focus on thorough planning and packing safe foods to guarantee a secure and enjoyable trip.',
	},
];

export default function TravelTips() {
	const [step, setStep] = useState(0);
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: steps[step].title,
		});
	}, [navigation, step]);

	const handleNextStep = () => {
		if (step < steps.length - 1) {
			setStep((prevStep) => prevStep + 1);
		}
	};

	const handleBackStep = () => {
		if (step > 0) {
			setStep((prevStep) => prevStep - 1);
		}
	};

	const handleBackToGuides = () => {
		navigation.navigate('index');
	};

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.container}>
				<GuideDetails
					title={steps[step].title}
					image={steps[step].image}
					heading={steps[step].heading}
					description={steps[step].description}
					onNext={handleNextStep}
					showNextButton={step < steps.length - 1}
					onBack={
						step > 0 ? handleBackStep : null
					}
					onBackToGuides={
						step === steps.length - 1
							? handleBackToGuides
							: null
					}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});
