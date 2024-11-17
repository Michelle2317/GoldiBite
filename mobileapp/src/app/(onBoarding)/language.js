

import { useRouter } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Avatar, Button, Card, Text } from "react-native-paper";
import { Dropdown } from 'react-native-paper-dropdown';
import PrimaryButton from "../../components/paperUiElement/PrimaryButton";
import { useEffect, useState } from "react";

export default function language() {

  const router = useRouter();

  const [language, setLanguage] = useState('en');


  const handleOnSubmit = () => {
    router.replace('/(onBoarding)/onBoarding');
  }

  const OPTIONS = [
    { label: 'English', value: 'en' }
  ];
  return (
    <>
      <View style={styles.container}>

        <Text variant="headlineMedium" style={{ fontWeight: 'bold', textAlign:"center" }}>Select a Language</Text>

        <View style={styles.languageDropDownListContainer}>
          <Dropdown
            label="Language"
            placeholder="Select language"
            options={OPTIONS}
            value={language}
            onSelect={setLanguage}
            menuContentStyle={{ backgroundColor: "#FCE4B6" }}
            hideMenuHeader={true}
          />
        </View>
        <PrimaryButton buttonText={"Next"} callback={handleOnSubmit} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 50,
    paddingTop: 170,
    paddingBottom:130,
    gap: 10,
    flexDirection: 'column',
    alignContent: 'center',
  },
  title: {
    flex: 1,
    width: 300,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  languageDropDownListContainer: {
    flex: 2, 
    display: "flex",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

});
