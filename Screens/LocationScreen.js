import React, {Component} from "react";
import { Constants } from 'expo';
import{
  View,
  Button,
  Linking,
  StyleSheet,
}from "react-native";

 class LocationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button title="Find Nearest Pharmacies" onPress={ ()=>{ Linking.openURL('http://www.hse.ie/eng/services/maps/')}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
});

export default LocationScreen;