import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTheme } from '@/src/hooks/useTheme';

const SegmentedButton = ({name}) => {
    const [value, setValue] = React.useState(name);
    const router = useRouter();
    const { colorScheme } = useTheme();
    const backgroundColor = colorScheme === 'light' ? '#BFEDDD' : '#494949';
    const fontColor = colorScheme === 'light' ? '#000000' : '#ffffff';

    const theme = colorScheme === 'light' ? {
        "colors": {
            "secondaryContainer": '#00C9A2', // active backgroundColor
            "textColor": '#000000', // active backgroundColor
            "borderColor": '#BFEDDD', // active backgroundColor
            "onSurface": '#000000', //
            "outline": '#BFEDDD',
            "background": '#BFEDDD',
        }
    }: {
        "colors": {
            "secondaryContainer": '#343434', // active backgroundColor
            "textColor": '#ffffff', // active backgroundColor
            "borderColor": '#494949', // active backgroundColor
            "onSurface": '#ffffff', //
            "outline": '#494949',
            "background": '#494949',
        }
    }

    const handleOnPress = (e, name) => {
        if (name === 'barcode')
            router.push({ pathname: "(tabs)/barcodeScanner/" })
        if (name
            
             === 'menu')
            router.push({ pathname: "(tabs)/barcodeScanner/menuCamera" })
    }

    return (<>
        <SafeAreaView style={styles.container}>
            <SegmentedButtons style={{ backgroundColor: backgroundColor, borderRadius: 18 }}
                theme={theme}
                density='small'
                value={value}
                onValueChange={setValue}
                buttons={[
                    {
                        value: 'Barcode',
                        label: 'Barcode',
                        onPress: (e) => handleOnPress(e, 'barcode'),
                    },
                    {
                        value: 'Menu',
                        label: 'Menu',
                        onPress: (e) => handleOnPress(e, 'menu'),
                    }
                ]}
            />
        </SafeAreaView>
    </>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 200,
        alignItems: 'center',
    },
});
export default SegmentedButton