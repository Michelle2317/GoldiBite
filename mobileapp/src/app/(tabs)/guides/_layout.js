import { Tabs, Stack } from 'expo-router'

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: 'Guides',
                tabBar: { visible: false }, 
                tabBarStyle:{display:'none'}
            }}
            />
            <Stack.Screen name="anaphylaxis" options={{
                headerTitle: 'Anaphylaxis'
            }} />
            <Stack.Screen name="epipen" options={{
                headerTitle: 'How to Use an Epipen'
            }} />
            <Stack.Screen name="travelTips" options={{
                headerTitle: 'Quick Travel Tips'
            }} />
        </Stack>

    )
}

export default StackLayout;