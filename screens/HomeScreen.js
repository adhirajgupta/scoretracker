import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader1 from '../components/AppHeader1'

export default class HomeScreen extends React.Component {
goToScoreScreen=()=>{
    this.props.navigation.navigate('ScoreScreen');
}    

render(){
return(
<View>
<AppHeader1/>
<TouchableOpacity style={styles.button} onPress={this.goToScoreScreen}>
<Text style={styles.buttonText}>Score Tracker</Text>
</TouchableOpacity>
</View>
)
}
}


const styles = StyleSheet.create({
button:{
marginTop: 55,
marginLeft: 45,
borderWidth: 2,
borderColor: 'yellow',
alignItems: 'center',
justifyContent: 'center',
width: 250,
height: 100,
backgroundColor:'yellow',
},   

buttonText:{
  fontSize:25,
  fontWeight:'bold',
}

})
