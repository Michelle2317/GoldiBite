import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import GuideDetails from '@/src/components/guides/GuideDetails'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const steps = [
	{
		heading: 'Tip 1: Always Carry Medication',
		description:
			'Always have your EpiPen and any other necessary medication within reach.',
	},
	{
		heading: 'Tip 2: Inform Travel Companions',
		description:
			'Make sure your travel companions know about your allergies and how to use your EpiPen.',
	},
	{
		heading: 'Tip 3: Check Food Labels',
		description:
			'Always check food labels when eating out or buying packaged food.',
	},
	{
		heading: 'Tip 4: Prepare for Emergencies',
		description:
			'Know the location of nearby hospitals and emergency services at your destination.',
	},
	{
		heading: 'Tip 5: Use Medical ID',
		description:
			'Wear a medical alert bracelet to inform others about your allergies in case of an emergency.',
	},
]

export default function TravelTips() {
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
				title="Quick Travel Tips"
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
