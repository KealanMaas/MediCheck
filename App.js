import React from 'react';
import "@expo/vector-icons"; // 6.2.0
//import { Text, View, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation' // 1.0.0-beta.21
//import { Constants } from 'expo';


//Screens
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'

import LocationScreen from './Screens/LocationScreen'
import SettingsScreen from './Screens/SettingsScreen'
import ContactsScreen from './Screens/ContactsScreen'

import AddMedicineScreen from './Screens/AddMedicineScreen'
import NewMedInformationScreen from './Screens/NewMedInformationScreen'
import MedIdentifierScreen from './Screens/MedIdentifierScreen'






const App = StackNavigator({
  
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen},
  
  LocationScreen:{screen: LocationScreen},
  SettingsScreen:{screen: SettingsScreen},
  ContactsScreen:{screen: ContactsScreen},

  AddMedicineScreen:{screen: AddMedicineScreen},
  NewMedInformationScreen:{screen: NewMedInformationScreen},
  MedIdentifierScreen:{screen: MedIdentifierScreen}
})

export default App;