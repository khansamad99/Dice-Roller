import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity 
} from 'react-native';


import Dice1 from './assets/dice1.png'
import Dice2 from './assets/dice2.png'
import Dice3 from './assets/dice3.png'
import Dice4 from './assets/dice4.png'
import Dice5 from './assets/dice5.png'
import Dice6 from './assets/dice6.png'

const App = () => {
  const [uri,setUri] = useState(Dice1)

  const changeDice = () => {
    let dice_no = Math.floor(Math.random() * 6)+1;
    switch (dice_no) {
      case 1:
        setUri(Dice1);
        break;
      case 2:
        setUri(Dice2);
        break;
      case 3:
        setUri(Dice3);
        break;
      case 4:
        setUri(Dice4);
        break;
      case 5:
        setUri(Dice5);
        break;
      case 6:
        setUri(Dice6);
        break;

      default:
        setUri(Dice1);
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={uri}/>
      <TouchableOpacity onPress={changeDice}>
        <Text style={styles.text}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#222831',
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    height:200,
    width:200
  },
  text:{
    fontSize: 30,
    marginTop:30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 5,
    borderWidth:4,
    textTransform: "uppercase",
  }
});



export default App;
