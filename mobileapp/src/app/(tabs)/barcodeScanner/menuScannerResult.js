import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';
import UserToolBar from '../../../components/UserToolBar'
import MenuItem from '../../../components/scanner/MenuItem';

const menuScannerResult = () => {
    const name = useState("Kaylie");
    return (<>
        <View style={styles.container}>
            <UserToolBar name={name} />
            <View style={styles.categoryContainer}>
                <Chip theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat' onPress={() => console.log('Pressed')} selected={true}> All </Chip>
                <Chip theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat' onPress={() => console.log('Pressed')} selected={true}> Breakfast </Chip>
                <Chip theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat' onPress={() => console.log('Pressed')} selected={false}> Lunch </Chip>
                <Chip theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat' onPress={() => console.log('Pressed')} selected={false}> Dinner </Chip>
            </View>

            <ScrollView>
            <MenuItem name1="Krabmeat Alfredo" isDetected={false} bgColor="rgba(210, 84, 9, 0.5)" />
            <MenuItem name1="Fettuccini Chicken" isDetected={true} bgColor="rgba(213, 203, 68, 0.7)" /> 
            <MenuItem name1="Fettuccini Alfredo" isDetected={false} bgColor="rgba(210, 84, 9, 0.5)" />
            <MenuItem name1="Krabmeat Alfredo" isDetected={false}  bgColor="rgba(213, 203, 68, 0.7)"  />
            <MenuItem name1="Fettuccini Chicken" isDetected={true}  bgColor="rgba(210, 84, 9, 0.5)"  />
            <MenuItem name1="Fettuccini Alfredo" isDetected={false} bgColor="rgba(213, 203, 68, 0.7)"  />
            <MenuItem name1="Krabmeat Alfredo" isDetected={false}  bgColor="rgba(210, 84, 9, 0.5)" />
            <MenuItem name1="Fettuccini Chicken" isDetected={true} bgColor="rgba(213, 203, 68, 0.7)" />
            <MenuItem name1="Fettuccini Alfredo" isDetected={false} bgColor="rgba(210, 84, 9, 0.5)" />
            <MenuItem name1="Krabmeat Alfredo" isDetected={false} bgColor="rgba(213, 203, 68, 0.7)" />
            <MenuItem name1="Fettuccini Chicken" isDetected={true} bgColor="rgba(210, 84, 9, 0.5)" />
            <MenuItem name1="Fettuccini Alfredo" isDetected={false} bgColor="rgba(213, 203, 68, 0.7)" />
            <MenuItem name1="Krabmeat Alfredo" isDetected={false}  bgColor="rgba(210, 84, 9, 0.5)" />
            <MenuItem name1="Fettuccini Chicken" isDetected={true} bgColor="rgba(213, 203, 68, 0.7)" />
            <MenuItem name1="Fettuccini Alfredo" isDetected={false}  bgColor="rgba(210, 84, 9, 0.5)" />
            </ScrollView>

        </View>

    </>)
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    categoryContainer: {
        flex: 1,
        margin: 16,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 50
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 22,
    },
});


export default menuScannerResult;