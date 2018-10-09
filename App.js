import React, {Component} from 'react';
import { 
  AppRegistry, StyleSheet, Text, View, StatusBar
} from 'react-native';

class TCH extends Component{
	
	constructor(props){
		super(props); //props: khai báo những giá trị tồn tại trong project
    console.log("Hello Constructor");
    console.disableYellowBox = true; // Ẩn thanh Warning bên dưới
	}

	componentWillMount(){
		console.log("Hello Will Mount");
	}

	render(){
		console.log("Hello Render");
		return(
      <View>
        <StatusBar hidden="true" /> {/* Ẩn thanh trên đầu của thiết bị */}
        <Text style={{marginTop:0}}>HEllo React Native</Text>
      </View>
		);
	}

	componentDidMount(){
    console.log("Hello Did Mount");
	}

}

export default TCH;

AppRegistry.registerComponent('TCH', () => TCH);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
