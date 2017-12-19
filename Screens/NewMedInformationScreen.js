import React, { Component } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';
import { Constants } from 'expo';

 class NewMedInformationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button title="Medication Information" onPress={ ()=>{ Linking.openURL('https://www.drugs.com/drug_information.html')}} />
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
export default NewMedInformationScreen