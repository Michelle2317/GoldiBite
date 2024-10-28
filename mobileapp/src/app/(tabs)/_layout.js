import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Icon, MD3Colors } from 'react-native-paper';

export default function TabLayout() {
  //#FFC858 1C1B1F
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: '#1C1B1F',tabBarStyle:{backgroundColor:'#FFC858'} }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon source="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="barcodeScanner"
        options={{
          title: "Barcode Scanner",
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Icon source="barcode-scan" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <Icon source="cog" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}