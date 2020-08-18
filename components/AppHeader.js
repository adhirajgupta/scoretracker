import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

class AppHeader extends React.Component {
render() {
return (
<View style = {styles.textContainer}>
<Text style = {styles.text}>Score Tracker</Text>
</View>

);
}
}

const styles = StyleSheet.create({
textContainer: {
marginTop:1,
backgroundColor: 'black',
padding:10,
},
text: {
fontWeight: 'bold',
fontSize: 20,
color:'white',
textAlign:'center',
padding:20, 
}
});
export default AppHeader;
