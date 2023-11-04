import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
    <SafeAreaView style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
      <Text style={[styles.searchBox]}>
        search
      </Text>
      <Text style={[styles.listBox]}>
        list
      </Text>
    </SafeAreaView>
     <ExpoStatusBar style ="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "orange"
  },
  searchBox: {
    padding: 16,
    backgroundColor: "green"
  },
  listBox:{
    flex :1,
    padding: 16,
    backgroundColor:"blue",
    
    
  }
});
