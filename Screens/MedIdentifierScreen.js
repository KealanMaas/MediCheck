import React, { Component } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';
import { Constants } from 'expo';

 class MedIdentifierScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button title="Medication Identifier" onPress={ ()=>{ Linking.openURL('https://www.drugs.com/imprints.php')}} />
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
    backgroundColor: '#ecf0f1',
  },
});
export default MedIdentifierScreen