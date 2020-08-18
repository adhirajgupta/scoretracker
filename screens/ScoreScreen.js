import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,ScrollView,Button} from 'react-native';
import Player1 from '../components/Player1.js'
import Player2 from '../components/Player2.js'
import Player3 from '../components/Player3.js'
import Player4 from '../components/Player4.js'  
import Player5 from '../components/Player5.js'
import Player6 from '../components/Player6.js'
import AppHeader from '../components/AppHeader.js'
import {Audio} from 'expo-av'

export default class ScoreScreen extends React.Component {
playSound = async (shouldPlay) => {
await Audio.Sound.createAsync(
{ uri: 'https://adhirajgupta.github.io/test1-for-mp3/Homework%203%20part%20two.mp3' },
{ shouldPlay: true }
);
}


render(){
return(
<View>
<TouchableOpacity style={styles.button} onPress={
<ScrollView>  
<View>
<AppHeader/>
<Player1/>
<Player2/>
<Player3/>
<Player4/>
<Player5/>
<Player6/>
<Button style={{backgroundColor:'black'}} title="Press for music" onPress={this.playSound(true)}/>
<Button title="Stop music" onPress={(this.playSound(false))}/> 
</View>
</ScrollView>
}>
</TouchableOpacity>
</View>
)
}
}


const styles = StyleSheet.create({
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
color:'pink',

},    
})