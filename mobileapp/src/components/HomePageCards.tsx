import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomePageCards({
  title,
  icon,
  description,
  cardColor,
  width = 150,
  height = 280,
  iconSize = 83,
  iconColor = '#000',
  iconLibrary = 'MaterialIcons',
}) {
  const IconComponent = iconLibrary === 'MaterialIcons' ? MaterialIcons : MaterialCommunityIcons;

  return (
    <Card style={[styles.card, { backgroundColor: cardColor, width, height }]}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.cardTitle}>
          {title}
        </Text>
        <View style={styles.iconContainer}>
          <IconComponent name={icon} size={iconSize} color={iconColor} />
        </View>
        <Text style={styles.cardDescription}>
          {description}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  cardTitle: {
    marginBottom: 12,
    textAlign: 'left',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardDescription: {
    textAlign: 'left',
  },
});
