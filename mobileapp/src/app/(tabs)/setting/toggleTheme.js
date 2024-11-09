import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useTheme } from "../../../hooks/useTheme";

const toggleTheme = () => {
  const { toggleTheme } = useTheme();

  return (
    <View style={{ margin: 16 }}>
      <Button icon="repeat" mode="outlined" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default toggleTheme;
