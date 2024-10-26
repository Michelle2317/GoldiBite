

import { useRouter } from "expo-router";
import { TextInput, Avatar, Button, Card, Text } from "react-native-paper";
export default function language() {

  const router = useRouter();

  const handleOnSubmit = () => {
    router.replace('/(tabs)/');
  }

  return (
    <>

      <Button mode="contained" onPress={handleOnSubmit}>
        Setup Language
      </Button>
    </>
  );
}
