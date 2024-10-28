import { View, StyleSheet } from 'react-native';
import UserToolBar from "@/src/components/UserToolBar";
import HomePageCards from "@/src/components/HomePageCards";

export default function Index() {
  const name = "Kaylie";

  return (
    <View style={styles.container}>
      <UserToolBar name={name} />
      <HomePageCards 
          title="Allergen Scanner"
          icon="barcode-reader"
          description="Scan barcode or menus to get instant results and make safe choices."
          cardColor="#BFEDDD"
          width={320}     
          height={235}     
          iconSize={110}  
          iconColor="#D25409"
          iconLibrary="MaterialIcons" 
      />
      <View style={styles.cardRow}>
        <HomePageCards 
          title="Emergency"
          icon="alarm-light"
          description="Explore our emergency assistance for when you have a severe allergy reaction."
          cardColor="rgba(210, 84, 9, 0.6)" 
          width={150}     
          height={280}     
          iconSize={93} 
          iconColor="#D5CB44"   
          iconLibrary="MaterialCommunityIcons"
        />
        <HomePageCards 
          title="Resources"
          icon="book"
          description="Explore our emergency assistance for when you have a severe allergy reaction."
          cardColor="#D5CB44"
          width={150}      
          height={280}      
          iconSize={93} 
          iconColor="#BFEDDD"  
          iconLibrary="MaterialIcons"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 22,
  },
});
