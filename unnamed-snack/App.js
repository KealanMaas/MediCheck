import React, { Component } from 'react';
import "@expo/vector-icons"; // 6.2.0
import { Text, View, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation' // 1.0.0-beta.21
import { Constants } from 'expo';


//Screens
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'

import LocationScreen from './Screens/LocationScreen'
import SettingsScreen from './Screens/SettingsScreen'
import ContactsScreen from './Screens/ContactsScreen'
import MedicineDetailsScreen from './Screens/MedicineDetailsScreen'
import AddMedicineScreen from './Screens/AddMedicineScreen'
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
const AppNavigator=StackNavigator({
  
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen},
  
  LocationScreen:{screen: LocationScreen},
  SettingsScreen:{screen: SettingsScreen},
  ContactsScreen:{screen: ContactsScreen},
  MedicineDetailsScreen:{screen: MedicineDetailsScreen},
  AddMedicineScreen:{screen: AddMedicineScreen}
})

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});