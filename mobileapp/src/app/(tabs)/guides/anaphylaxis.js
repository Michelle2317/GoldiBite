import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GuideDetails from '@/src/components/guides/GuideDetails';

const steps = [
	{
		title: 'What is Anaphylaxis?',
		image: require('@/assets/images/guides/whatIs.jpeg'),
		description:
			'Anaphylaxis is a severe, life-threatening allergic reaction that requires immediate treatment with an epinephrine shot and a call to 911.\n\nEpinephrine can reverse symptoms within minutes; if not, a second dose may be needed within 30 minutes.\n\nAntihistamines are ineffective for Anaphylaxis. Although rare, some people are more prone to it, and most recover with prompt care.\n\nInform your doctor of any allergies, and consider wearing a medical alert bracelet or carrying a card with allergy details.',
	},
	{
		title: 'Early Warnings',
		image: require('@/assets/images/guides/stage1.jpeg'),
		heading: '1. Initial Reactions',
		description:
			"Symptoms are mild and may resemble a regular allergy, such as:\n\t• Itching\n\t• Hives\n\t• Runny nose\n\n If you're at risk for Anaphylaxis, keep an eye on these early signs.",
	},
	{
		title: 'Progressive Stage',
		image: require('@/assets/images/guides/stage2.jpeg'),
		heading: '2. Escalation',
		description:
			'Symptoms spread and become more noticeable:\n\t• Face swelling\n\t• Lips\n\t• Tongue\n\t• Watery eyes\n\t• (Possibly) Digestive issues\n\t• Swallowing may become difficult\n\nSeek help to prevent worsening.',
	},
	{
		title: 'Severe Stage',
		image: require('@/assets/images/guides/stage3.jpeg'),
		heading: '3. Respiratory Distress',
		description:
			'Breathing becomes difficult, accompanied by:\n\t• Weak Pulse\n\t• Chest Pain\n\t• Dizziness\n\t• Or Fainting\n\nThis stage is often referred to as Anaphylactic shock.',
	},
	{
		title: 'Critical Stage',
		image: require('@/assets/images/guides/stage4.jpeg'),
		heading: '4. Condition',
		description:
			'Symptoms reach a life-threatening level with:\n\t• Severe drops in blood pressure\n\t• Poor blood circulation\n\t• Swelling that blocks airways\n\nAt this stage, Anaphylaxis can lead to heart failure.',
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
		padding: 35,
	},
});
