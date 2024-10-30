import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function GuideDetails({ title, heading, description, onNext, showNextButton, onBack }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.placeholder} />
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.arrowContainer}>
                {onBack && (
                    <IconButton
                        icon="arrow-left-bold"
                        onPress={onBack}
                        mode="contained"
                        size={20}
                        theme={{ colors: { onPrimary: 'red', primary: '#000000', surfaceVariant: '#beeddd' } }}
                        style={styles.arrowButton}
                    />
                )}
                {showNextButton && (
                    <IconButton
                        icon="arrow-right-bold"
                        onPress={onNext}
                        mode="contained"
                        size={20}
                        theme={{ colors: { onPrimary: 'red', primary: '#000000', surfaceVariant: '#beeddd' } }}
                        style={styles.arrowButton}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    placeholder: {
        width: 272,
        height: 143,
        backgroundColor: '#beeddd',
        borderRadius: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    arrowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    arrowButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});
