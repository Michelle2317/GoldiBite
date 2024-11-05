import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GuideDetails from '@/src/components/guides/GuideDetails';

const steps = [
	{
		title: 'Tip 1',
		image: require('@/assets/images/guides/lookInAdvanced.jpeg'),
		heading: 'Make a Research on Local Restaurants',
		description:
			'To safely enjoy dining out while traveling with food allergies, research 2–3 nearby restaurants so you have backup options. Even with careful vetting, some places may not be as allergy-aware as expected, so having alternatives avoids disappointment.',
	},
	{
		title: 'Tip 2',
		image: require('@/assets/images/guides/bookFriendly.jpeg'),
		heading: 'Cook your own food preferably',
		description:
			'The safest way to travel with food allergies is to cook your own meals. By doing so, you control every step and avoid relying on others’ knowledge of food allergies, allowing you to enjoy your trip worry-free.',
	},
	{
		title: 'Tip 3',
		image: require('@/assets/images/guides/medicalFacilities.jpeg'),
		heading: 'Buy Travel Medical Insurance',
		description:
			'When traveling internationally with a nut allergy or any food allergy, it’s essential to buy travel medical insurance. This coverage can help mitigate the high costs of hospitalization in case of a severe reaction, which can be financially burdensome. Prioritize your safety by planning carefully and ensuring you have the necessary protections in place for a worry-free trip.',
	},
	{
		title: 'Tip 4',
		image: require('@/assets/images/guides/tip4.jpeg'),
		heading: 'Prepare Allergy Cards in the Local Language',
		description:
			'If you’re traveling to a country where the spoken language differs from your own, bring an allergy translation card. This card can help you communicate your allergies clearly, ensuring that restaurant staff and others understand your dietary needs, which is crucial for your safety. Being prepared with this tool can make dining out and navigating food options much easier while you travel.',
	},
	{
		title: 'Tip 5',
		image: require('@/assets/images/guides/tip5.jpeg'),
		heading: 'How to travel as someone who suffers from Nut allergies?',
		description:
			'Traveling abroad with a nut allergy, or any food allergy, requires similar precautions. Regardless of your specific allergy—be it nuts, peanuts, milk, wheat, or Celiac disease—the approach remains the same: plan and pack safe foods for your needs. Cooking for yourself is more beneficial, as it allows you to control food safety without worrying about the prevalence of certain allergens. Focus on effective planning and packing for your specific allergies to ensure a safe and enjoyable trip.',
	},
];

export default function TravelTips() {
	const [step, setStep] = useState(0);
	const navigation = useNavigation();

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

	return (
		<View style={styles.container}>
			<GuideDetails
				title={steps[step].title}
				image={steps[step].image}
				heading={steps[step].heading}
				description={steps[step].description}
				onNext={handleNextStep}
				showNextButton={step < steps.length - 1}
				onBack={step > 0 ? handleBackStep : null}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 35,
	},
});
