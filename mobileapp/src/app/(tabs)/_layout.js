import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabLayout() {
  //#FFC858 1C1B1F
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: '#1C1B1F',tabBarStyle:{backgroundColor:'#FFC858'} }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="barcodeScanner"
        options={{
          title: "Barcode Scanner",
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Feather name="camera" size={24} color={color} /> 
          ),
          // tabBarVisible: false,
          // tabBarStyle:{display:'none'}
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
