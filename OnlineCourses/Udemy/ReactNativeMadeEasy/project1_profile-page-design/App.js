import {Text, View, Image, SafeAreaView} from 'react-native';
import styles from './StyleSheet';
import profilePic from './assets/batman-avatar.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image style={{ marginBottom: 20 }} source={profilePic} />
        <Text style={{ maxWidth: 225 }}>"It's not who I am underneath, but what I do that defines me"</Text>
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailsItemLabel}>Name:</Text>
          <Text style={styles.detailsItemText}>Batman</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailsItemLabel}>City:</Text>
          <Text style={styles.detailsItemText}>Gotham</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailsItemLabel}>Favorite Color:</Text>
          <Text style={styles.detailsItemText}>Black</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailsItemLabel}>Job:</Text>
          <Text style={styles.detailsItemText}>Batting</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}