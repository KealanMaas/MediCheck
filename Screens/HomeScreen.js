import React, {Component} from "react";
import { Constants } from 'expo';
import{
  View,
  Text,
  Button,
  StyleSheet
  
}from "react-native";


class HomeScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
      
      <Text style={styles.ext}>Main Menu</Text>
      
      <Button 
      style={styles.button}
      onPress={() => this.props.navigation.navigate('AddMedicineScreen')}
      title="Add Medicine" />
      <Text style={{color: 'white'}}>4576616e</Text>
      
      <Button 
      style={styles.button}
      onPress={() => this.props.navigation.navigate('LocationScreen')}
      title="Location" />
      <Text style={{color: 'white'}}>4369616e</Text>
      
      <Button 
      style={styles.button}
      onPress={() => this.props.navigation.navigate('MedIdentifierScreen')}
      title="Medicine Identifier" />
      <Text style={{color: 'white'}}>4369616e</Text>
      
       <Button 
       style={styles.button}
       onPress={() => this.props.navigation.navigate('NewMedInformationScreen')}
      title="Medicine Information" />
      <Text style={{color: 'white'}}>4369616e</Text>
      
      <Button 
      style={styles.button}
      onPress={() => this.props.navigation.navigate('ContactsScreen')}
      title="Contacts" />
      <Text style={{color: 'white'}}>54796c6f72</Text>
      

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
 button: {
    marginTop: 10,
    paddingBottom: 20,
    width: '100%',
    backgroundColor: '#00aeef',
    borderRadius: 4,
    alignItems: 'center',
  },
  ext: {
    fontSize: 22
  }
});

export default HomeScreen;
