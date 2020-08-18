import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Button } from 'react-native';

class Player1 extends React.Component {
constructor(){
super();
this.state = {
Num1:0,
tInput:'',
}
}

Sum=()=>{
var N1 = parseInt(this.state.Num1);
var N2 = parseInt(this.state.tInput);
var N3 = (N1+N2);
this.setState({
Num1:N3,
tInput:'',
})
}
render() {
return (


<View style = {styles.textContainer}>
<Text style={styles.text1}>Player1 - </Text>
<Text style={styles.text2}>{this.state.Num1}</Text>
<TextInput style = {styles.inputBox1} placeholder='Num' onChangeText={tInput=>this.setState({tInput:tInput})}/> 
<TouchableOpacity style={styles.button} onPress={this.Sum}>
<Text style={styles.plus}>+</Text>
</TouchableOpacity>
<Text style={styles.text2}>{this.state.Num3}</Text>
</View>


);
}
}


const styles = StyleSheet.create({

textContainer: {
marginTop:0,
backgroundColor: 'red',
padding:40,
},

text1: {
marginTop:-10,
fontWeight: 'bold',
fontSize: 20,
color:'black',
textAlign:'left',
},

text2 : {
marginTop:-25,
marginLeft:100,
textAlign:'left',
fontWeight: 'bold',
fontSize: 20,

},
plus:{
  marginTop: 25,
  marginLeft: 70,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 40,
  width :50,
  height:70,
  },
  
button:{
marginTop: -55,
marginLeft: 130,
borderWidth: 1,
borderColor: 'red',
alignItems: 'center',
justifyContent: 'center',
width: 50,
height: 50,
borderRadius: 120,
color:'pink'
},



inputBox1: {
marginTop: -30,
marginLeft: 220,
width: 40,
alignSelf: 'center',
height: 40,
textAlign: 'center',
borderWidth: 4,  
},


inputBox2: {
marginTop: -30,
marginLeft: 220,
width: 90,
justifyContent: 'left',
height: 40,
textAlign: 'center',
borderWidth: 4,  
},

});

export default Player1;
