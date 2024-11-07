import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Icon, MD3Colors } from 'react-native-paper';


export default function TabLayout() {
  //#FFC858 1C1B1F
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#fff', tabBarInactiveTintColor: '#1C1B1F',tabBarStyle:{backgroundColor:'#FFC858'} }}>
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
        name="emergency"
        options={{
          title: "Emergency",
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Icon source="alarm-light-outline" size={24} color={color} /> 
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
        name="guides"
        options={{
          title: "Guides",
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Icon source="book-open-blank-variant" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Settings",
          href:'setting',
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Icon source="cog" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}