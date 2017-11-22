import React, {Component} from "react";

import{
  View,
  Text,
  Button
  
}from "react-native";


class HomeScreen extends Component{
  render(){
    return (
      <View>
      <Text>This is the Home screen</Text>
      <Button onPress={() => this.props.navigation.navigate('MedicineDetailsScreen')}
      title="Go to the medicine details MedicineScreen" />
      <Button onPress={() => this.props.navigation.navigate('LocationScreen')}
      title="Go to the LocationScreen" />
       <Button onPress={() => this.props.navigation.navigate('SettingsScreen')}
      title="Go to the Settings Screen" />
      <Button onPress={() => this.props.navigation.navigate('ContactsScreen')}
      title="Go to the contacts screen" />
      <Button onPress={() => this.props.navigation.navigate('AddMedicineScreen')}
      title="Go to the AddMedicineScreen screen" />

      </View>
      );
  }
}

export default HomeScreen;
