import { StyleSheet, Text, View } from 'react-native'
export default function App() {
  return (
    <View>
      <View>
        <Text style={styles.font}>Halo</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  font: {
    fontFamily : 'Poppins-Bold',
    color:'black',
    FontSize: '24'
  }
})