import React from 'react';
import { StyleSheet, View, TextInput, StatusBar,Button,Alert} from 'react-native';

class AddMedicineScreen extends React.Component {
  _handleButtonPress = () => {
    Alert.alert(
	  'Your Medication Has Been Updated',
   
      this.state.medname,
      this.state.dosage, 
      this.state.medtime,
      this.state.totAmount,
      this.state.reminder
    );
  };
  constructor(props) {
    super(props);
 
    this.state = {
 
      medname: this.props.medname,
      dosage: this.props.dosage,
      medtime: this.props.medtime,
      totAmount:this.props.totAmount,
      reminder:this.props.reminder
      
 
    }
  }

  onChangeDos(dosage){
    this.setState({dosage: dosage});
  }
  
  onChangeMedName(medname){
    this.setState({medname: medname});
  }
  
  onChangeMedTime(medtime){
    this.setState({medtime: medtime});
  }
  onChangeAmount(totAmount){
    this.setState({totAmount: totAmount});
  }
   onChangeReminder(reminder){
    this.setState({reminder: reminder});
  }
  render() {
    return (
     <View style={styles.container}>
     <StatusBar
     barStyle="dark-content"
     />
        <TextInput 
          style={styles.input}
          placeholder="Name Of Medication"
          medname = {this.state.medname}
          onChangeText = {(medname) => this.onChangeMedName(medname)}
          
          placeholderTextColor="#3386FF"
          returnKeyType="next" //changes what return key looks like
          keyboardType="email-address"//changes keyboard to include @ signs
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput 
          style={styles.input}
          placeholder="Dosage"
          dosage = {this.state.dosage}
          onChangeText = {(dosage) => this.onChangeDos(dosage)}
          
          placeholderTextColor="#3386FF"
          returnKeyType="next" //changes what return key looks like
          keyboardType="email-address"//changes keyboard to include @ signs
          autoCapitalize="none"
          autoCorrect={false}
        />
        
          <TextInput 
          style={styles.input}
          placeholder="Time For Medication"
          medtime = {this.state.medtime}
          onChangeText = {(medtime) => this.onChangeMedTime(medtime)}
          
          placeholderTextColor="#3386FF"
          returnKeyType="next" //changes what return key looks like
          keyboardType="email-address"//changes keyboard to include @ signs
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput 
          style={styles.input}
          placeholder="Total Amount"
          medtime = {this.state.medtime}
          onChangeText = {(totAmount) => this.onChangeAmount(totAmount)}
          placeholderTextColor="#3386FF"
          returnKeyType="next" //changes what return key looks like
          keyboardType="email-address"//changes keyboard to include @ signs
          autoCapitalize="none"
          autoCorrect={false}
        />
          
          <TextInput 
          style={styles.input}
          placeholder="Low Supply Reminder Date"
          reminder = {this.state.reminder}
          onChangeText = {(reminder) => this.onChangeReminder(reminder)}
          placeholderTextColor="#3386FF"
          returnKeyType="next" //changes what return key looks like
          keyboardType="email-address"//changes keyboard to include @ signs
          autoCapitalize="none"
          autoCorrect={false}
        />
 
        <Button
          title="Submit"
          onPress={this._handleButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom:10,
    color:'#3386FF',
    paddingHorizontal:10
  },
 
});
export default AddMedicineScreen;