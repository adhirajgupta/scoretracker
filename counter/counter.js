import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader2 from '../components/AppHeader2'

class counter extends React.Component {
constructor(){
super();
this.state={
count:0,
text:'',
}
}
countIt(){
this.setState({
count:this.count++,
text: this.count,
});
}

render(){
return(
<View>
<AppHeader2/>
<TouchableOpacity style={styles.button} onPress={this.Sum , this.playSound}>
<Text style={styles.buttonText}>+</Text>
</TouchableOpacity>
</View>
)
}
}

const styles = StyleSheet.create({
button:{
marginTop: -50,
marginLeft: 120,
borderWidth: 1,
borderColor: 'red',
alignItems: 'center',
justifyContent: 'center',
width: 50,
height: 50,
borderRadius: 120,
},

buttonText:{
fontSize:20,
}

})
