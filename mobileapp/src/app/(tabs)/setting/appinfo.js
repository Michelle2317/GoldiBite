import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import { useRouter } from 'expo-router';

const appinfo = () => {
	const router = useRouter();
	const handleBackBtn = () => {
		router.back();
	};

	return (
		<>
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Text
						variant='bodyMedium'
					>
						GoldiBite is an AI-powered app
						designed to assist individuals
						with food allergies and
						sensitivities by providing a
						comprehensive database to manage
						food safety concerns while
						traveling. It aims to eliminate
						the inconvenience and potential
						safety risks associated with
						varying ingredient information
						and regulations worldwide.
					</Text>

					<Text
						variant='bodyMedium'
					>
						GoldiBite is inspired by the
						Goldilocks story, specifically
						the famous line, “This porridge
						is too hot, this porridge is too
						cold, this porridge is just
						right.” With our tagline “The
						right bite, every time,”
						GoldiBite allows users to scan
						food products or menus to check
						for allergens instantly. The app
						filters out risky foods and
						highlights the safest options,
						making it easier to navigate
						dietary restrictions.
					</Text>

					<Text
						variant='bodyMedium'
					>
						We are a team of students from
						the Digital Design and Web
						Development program at BCIT,
						committed to building a tool
						that promotes food safety:
					</Text>
					<Text
						variant='bodyMedium'
					>
						{' '}
						{'\u2022'} Michelle & Timothy -
						Research and Development
					</Text>
					<Text
						variant='bodyMedium'
					>
						{' '}
						{'\u2022'} Leslie & Gavin -
						Design and Ideation
					</Text>
					<Text
						variant='bodyMedium'
					>
						{' '}
						{'\u2022'} Cindy & Ale -
						Competitor Analysis
					</Text>
					<Text
						variant='bodyMedium'
					>
						{' '}
						{'\u2022'} Julia & Andrew -
						Information Gathering
					</Text>
					<Text
						variant='bodyMedium'
					>
						For more information, contact us
						at +441 158 2755.
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton buttonText="Save" callback={handleBackBtn} />
				</View>

			</View>
		</>
	);
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 2,
        padding: 20,
        gap: 10,
        flexDirection: 'column',
        alignContent: 'center',
    },
    contentContainer: {
        flex: 10,
        display: "flex",
        gap: 10,
    },
    buttonContainer: {
        flex: 1,
        gap: 10,
    },
	description: {
		flex: 1,
		flexDirection: 'column',
	},
});
export default appinfo;
