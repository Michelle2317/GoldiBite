import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Chips = ({ text, isActive, onPress }) => {
    return (
        <TouchableOpacity
            style={[
                styles.chip,
                text === 'All' && isActive
                    ? styles.activeChipAll
                    : text === 'No Allergen' && isActive
                    ? styles.activeChipNoAllergen
                    : text === 'May Contain Allergens' && isActive
                    ? styles.activeChipMayContain
                    : text === 'All'
                    ? styles.inactiveChipAll
                    : text === 'No Allergen'
                    ? styles.inactiveChipNoAllergen
                    : text === 'May Contain Allergens'
                    ? styles.inactiveChipMayContain
                    : styles.inactiveChip,
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.chipText,
                    text === 'All' && isActive
                        ? styles.activeTextAll
                        : text === 'No Allergen' && isActive
                        ? styles.activeTextNoAllergen
                        : text === 'May Contain Allergens' && isActive
                        ? styles.activeTextMayContain
                        : text === 'No Allergen' || text === 'May Contain Allergens'
                        ? styles.inactiveTextWhite
                        : styles.inactiveText,
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    chip: {
        margin: 2,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chipText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    activeChipAll: {
        backgroundColor: '#ffcb63',
    },
    activeChipNoAllergen: {
        backgroundColor: '#3d852f',
    },
    activeChipMayContain: {
        backgroundColor: '#ff4342',
    },
    inactiveChipAll: {
        backgroundColor: '#fce4b6',
    },
    inactiveChipNoAllergen: {
        backgroundColor: '#9dc297',
    },
    inactiveChipMayContain: {
        backgroundColor: '#fea0a0',
    },
    activeTextAll: {
        color: 'black',
    },
    activeTextNoAllergen: {
        color: '#fff',
    },
    activeTextMayContain: {
        color: '#fff',
    },
    inactiveText: {
        color: 'black',
    },
    inactiveTextWhite: {
        color: '#fff',
    },
});

export default Chips;
