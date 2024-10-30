import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import GuideDetails from '@/src/components/guides/GuideDetails'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const steps = [
	{
		heading: 'What is Anaphylaxis?',
		description:
			'Anaphylaxis is a severe, potentially life-threatening allergic reaction that can occur suddenly.',
	},
	{
		heading: 'Causes',
		description:
			'Common triggers include foods, insect stings, medications, and latex.',
	},
	{
		heading: 'Symptoms',
		description:
			'Symptoms can include difficulty breathing, swelling, hives, and a rapid heartbeat.',
	},
	{
		heading: 'Immediate Action',
		description:
			'If you suspect anaphylaxis, use an EpiPen and call emergency services immediately.',
	},
	{
		heading: 'Post-Care',
		description:
			'After treatment, always seek medical attention to monitor for any complications.',
	},
]

export default function Anaphylaxis() {
	const [step, setStep] = useState(0)
	const navigation = useNavigation()

	const handleNextStep = () => {
		if (step < steps.length - 1) {
			setStep((prevStep) => prevStep + 1)
		}
	}

	const handleBackToGuides = () => {
		navigation.navigate('index')
	}

	const handleBackStep = () => {
		if (step > 0) {
			setStep((prevStep) => prevStep - 1)
		}
	}

	return (
		<View style={styles.container}>
			<GuideDetails
				title="What is Anaphylaxis?"
				heading={steps[step].heading}
				description={steps[step].description}
				onNext={handleNextStep}
				showNextButton={step < steps.length - 1}
				onBack={step > 0 ? handleBackStep : null}
			/>
			{step === steps.length - 1 && (
				<Button
					mode="contained"
					onPress={handleBackToGuides}
					style={styles.guideButton}
				>
					Back to Guides
				</Button>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		flexDirection: 'column',
		justifyContent: 'start',
		alignItems: 'center',
		padding: 20,
		marginBottom: 60,
	},
	guideButton: {
		marginBottom: 50,
	},
})
