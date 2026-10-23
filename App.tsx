import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Platform,
} from 'react-native';

export default function App() {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.alert('Votre première application IAIL S5 fonctionne !');
    } else {
      Alert.alert(
        'Bienvenue',
        'Votre première application IAIL S5 fonctionne !'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>FSA !</Text>

      <Text style={styles.sousTitre}>
        IAIL S5 - Developpement mobile
      </Text>

      <Pressable style={styles.bouton} onPress={handlePress}>
        <Text style={styles.texteBouton}>Bienvenue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titre: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003796',
  },
  sousTitre: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  bouton: {
    marginTop: 20,
    backgroundColor: '#960000',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 9,
  },
  texteBouton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
