import { Constants } from 'expo';

import React, { Component } from 'react';
import {AppRegistry,
        Text,
        View,
        StyleSheet,
        ListView,
        TouchableHighlight,
        Modal,
        TextInput
} from 'react-native';
const styles = require('./app/style'); 
import * as firebase from 'firebase'; // 4.7.0
import AddButton from './app/components/AddButton/AddButton';
//import Toolbar from './app/components/Toolbar/Toolbar';

const firebaseConfig = {
	 apiKey: "AIzaSyAtBgTLF-2PbWzEhS-AHRon9pyPH1Ovm60",
    authDomain: "login-app-41c3d.firebaseapp.com",
    databaseURL: "https://login-app-41c3d.firebaseio.com",
    projectId: "login-app-41c3d",
    storageBucket: "login-app-41c3d.appspot.com",
    messagingSenderId: "22559624"
}

//const firebaseApp = firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default class ItemLister extends Component {
  constructor(){
  	super();
  	let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
  	this.state = {
  		text: '',
  		itemDataSource: ds,
  		modalVisible: false,
  	}

  	this.itemsRef = this.getRef().child('items');

  	this.renderRow = this.renderRow.bind(this);
  	this.pressRow = this.pressRow.bind(this);
  }

  setModalVisible(visible){
  	this.setState({modalVisible:visible});
  }

  getRef(){
  	return firebase.database().ref();
  }

  componentWillMount(){
  	this.getItems(this.itemsRef);
  }

  componentDidMount(){
  	this.getItems(this.itemsRef);
  }

  getItems(itemsRef){
  	//let items = [{title:'Item One'},{title:'Item Two'}];
  	itemsRef.on('value',(snap) => {
  		let items = [];
  		snap.forEach((child) => {
  			items.push({
  			  title: child.val().title,
  			  _key: child.key
  			});
  		});

  		this.setState({
  		itemDataSource: this.state.itemDataSource.cloneWithRows(items)
  		});

  	});
  }

  pressRow(item){
  	 this.itemsRef.child(item._key).remove();
  }

  renderRow(item){
  	return (
  	  <TouchableHighlight onPress={() => {
  	    this.pressRow(item);
  	  }}>
	  	  <View style={styles.li}>
	  	    <Text style={styles.liText}>{item.title}</Text>
	  	  </View>

  	  </TouchableHighlight>
  	);
  }

  addItem(){
  	this.setModalVisible(true);
  }

  render() {
    return (
      <View style={styles.container}>
      <Modal
      	animationType="slide"
      	transparent={false}
      	visible={this.state.modalVisible}
      	onRequestClose={() => {}}
      	>
       <View style={{marginTop: 22}}>
        <View>
          <TextInput
          	placeHolder="Add Item"
          	onChangeText = {(value) => this.setState({text:value})}
          />
          <TouchableHighlight onPress={() => {
          	this.itemsRef.push({title: this.state.text});
          	this.setModalVisible(!this.state.modalVisible);
          }}>
            <Text>Save Item</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {
          	this.setModalVisible(!this.state.modalVisible)
          }}>
            <Text>Cancel</Text>
          </TouchableHighlight>

         </View>
        </View>
       </Modal>

        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <AddButton onPress={this.addItem.bind(this)} title="Add Reminder" />
      </View>
    );
  }
}

AppRegistry.registerComponent('ItemLister', () => ItemLister);