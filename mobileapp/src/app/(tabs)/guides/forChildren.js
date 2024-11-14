import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GuideDetails from '@/src/components/guides/GuideDetails';

const steps = [
	{
		image: require('@/assets/images/guides/forChildren.jpeg'),
		heading: '1. Check EpiPen',
		description:
			'Before using the EpiPen, verify that it is in good condition. Inspect the device for an expiration date and ensure the liquid inside the viewing window is clear and colorless. If it appears discolored or contains particles, the EpiPen may be ineffective. This step is important because using an expired or damaged device could result in insufficient treatment during an allergic \n\nreaction.',
	},
	{
		image: require('@/assets/images/guides/administer.jpeg'),
		heading: '2. Administer',
		description:
			'Hold the EpiPen in your dominant hand like a fist, keeping your thumb away from the ends. Pull off the blue safety cap. Place the orange tip against the middle of the child’s outer thigh, even through clothing if needed. Push firmly until you hear a click, signaling the injection has begun. Hold for 3 seconds to ensure the full\n\ndose is delivered.',
	},
	{
		image: require('@/assets/images/guides/massage.jpeg'),
		heading: '3. Remove and Massage',
		description:
			'Carefully pull the EpiPen away from the thigh after the injection. The orange tip should \nextend to cover the needle automatically, preventing accidental needle sticks. Gently massage the injection site for 10 seconds to help spread the epinephrine and promote faster absorption into the bloodstream. This helps the medication act more quickly to relieve the \n\nallergic symptoms.',
	},
	{
		image: require('@/assets/images/guides/secure.jpeg'),
		heading: '4. Secure the EpiPen',
		description:
			'Place the used EpiPen back in its carrying case or set it safely aside, ensuring that it stays out of reach of others to prevent accidental reuse or injury. This step is essential for safe disposal by medical professionals and ensures no one gets hurt by the exposed needle.',
	},
	{
		image: require('@/assets/images/guides/monitor.jpg'),
		heading: '5. Monitor the Child',
		description:
			'Stay with the child and monitor their condition closely while waiting for emergency medical assistance. Observe for any improvement or worsening of symptoms. If the child’s breathing does not improve or symptoms return, a second dose might be necessary if available. This observation period is crucial for assessing \n\nwhether additional treatment is needed.',
	},
];

export default function ForChildren() {
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
		padding: 20,
	},
});
