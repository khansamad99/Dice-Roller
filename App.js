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
  const [uri,setUri] = useState(Dice2)

  const changeDice = () => {
    const dice_no = Math.floor(Math.random() * 6)
    const path = `Dice${dice_no}`
    console.log(path)
    setUri(path)
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
    height:100,
    width:100
  },
  text:{
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase",
  }
});



export default App;
