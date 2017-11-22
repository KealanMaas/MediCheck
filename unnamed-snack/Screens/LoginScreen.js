import React, {Component} from "react";
import {StackNavigator}from 'react-navigation' // 1.0.0-beta.21
import{
  View,
  Text,
  Button
}from "react-native";
import * as firebase from'firebase'; // 4.6.2
//import MainTabNavigator from'../navigation/MainTabNavigator';
//import {StackNavigator} from 'react-navigation'; // 1.0.0-beta.21
import {FormLabel, FormInput} from 'react-native-elements'; // 0.18.2

import "@expo/vector-icons"; // 6.1.0

import "@expo/vector-icons"; // 6.1.0
 if (!firebase.apps.length) {
   
firebase.initializeApp(
  // Initialize Firebase
  {
 
    apiKey: "AIzaSyAtBgTLF-2PbWzEhS-AHRon9pyPH1Ovm60",
    authDomain: "login-app-41c3d.firebaseapp.com",
    databaseURL: "https://login-app-41c3d.firebaseio.com",
    projectId: "login-app-41c3d",
    storageBucket: "login-app-41c3d.appspot.com",
    messagingSenderId: "22559624"
  }
  );
 }



class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state={email:'',password:'',error:'',loading:false};
  }
  
  onLoginPress(){
  
    //this.setState({error:'',loading:true});
    
    const{email,password}= this.state;
    firebase.auth().signInWithEmailAndPassword(email,password).then(() =>{
       this.props.navigation.navigate('HomeScreen')
//      this.state({error: '', loading:false});
       
      
    })
    //.catch(()=>{
    //  this.state({error:'Authentication failed',loading:false});
    //})
  }
  
    onSignUpPress(){
   // this.setState({error:'',loading:true});
    const{email,password}= this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
   //   this.state({error:'',loading:false});
     // this.props.navigation.navigate('HomeScreen');
    })
   // .catch(()=>{
    //  this.state({error:'Authentication failed',loading:false});
  //  })
  }
  
  renderButtonOrLoading(){
    if(this.state.loading){
      return <Text> Loading </Text>
    }
    return <View>
    <Button
    onPress={this.onLoginPress.bind(this)}
    title='Login'/>
    <Button
    onPress={this.onSignUpPress.bind(this)}
    title='Sign Up'/>
    </View>
  }
  render(){
    return(
      <View>
      <FormLabel>Email</FormLabel>
      <FormInput 
      value={this.state.email}
      onChangeText={email=>this.setState({email})}
      placeholder='example@example.com'
      />
      <FormLabel>Password</FormLabel>
      <FormInput 
      value={this.state.password}
      secureTextEntry
      placeholder='******'
      onChangeText={password=>this.setState({password})}
      />
      <Text>{this.state.error}</Text>
      {this.renderButtonOrLoading()}
      </View>
      )
  }
}
export default LoginScreen;