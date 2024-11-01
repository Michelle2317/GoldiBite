import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const SegmentedButton = () => {
    const [value, setValue] = React.useState('');

    const theme = {
        "colors": {
            "secondaryContainer": '#00C9A2', // active backgroundColor
            "textColor": '#000000', // active backgroundColor
            "borderColor": '#BFEDDD', // active backgroundColor
            "onSurface": '#000000', //
            "outline": '#BFEDDD',
            "background":'#BFEDDD',
        }
    }


    return (<>
        <SafeAreaView style={styles.container}>
            <SegmentedButtons style={{ backgroundColor:'#BFEDDD', borderRadius:18}}
            theme={theme}
                density='small'
                value={value}
                onValueChange={setValue}
                buttons={[
                    {
                        value: 'Barcode',
                        label: 'Barcode',
                    },
                    {
                        value: 'Menu',
                        label: 'Menu',
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