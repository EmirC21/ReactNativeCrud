import React,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from '../firebaseConnection';

const App = () => {

   constructor(props) 
   {
    
    this.state=
    {
        name:"",
        phone:0,
        age:0,
    }
   }
   Insert_kar=()=>{
firebase.database().ref("users/"+this.state.phone).set(
    {
    fname:this.state.name,
    age:this.state.age,
    }
)
   }
  
    return (
        
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold", color: 'black' }}>CRUD APP</Text>
            </View>

            <View style={{ flex: 8, marginHorizontal: 15 }}>
                <ScrollView>
                    <TextInput onChangeText={(fname)=>{this.setState({name:fname})}}
                    style={styles.TextInputStyles} placeholder='Name' />
                    <TextInput  onChangeText={(phone)=>{this.setState({phone:phone})}}
                     keyboardType="number-pad" style={styles.TextInputStyles} placeholder='Phone' />
                    <TextInput  onChangeText={(age)=>{this.setState({age:age})}}
                     keyboardType="number-pad" style={styles.TextInputStyles} placeholder='Age' />
                    <Button onPress={this.insert_kar}
                     style={{backgroundColor:"#000",paddingVertical:5,marginBottom:10}} mode="contained" >
                        Insert  
                    </Button>
                    <Button style={{backgroundColor:"blue",paddingVertical:5,marginBottom:10}} mode="contained" >
                        Update  
                    </Button>
                    <TextInput keyboardType="number-pad" style={styles.TextInputStyles} placeholder='Phone' />
                    <Button style={{backgroundColor:"tomato",paddingVertical:5,marginBottom:10}} mode="contained" >
                        Delete  
                    </Button>
                    <Button style={{backgroundColor:"green",paddingVertical:5,marginBottom:10}} mode="contained" >
                        VIEW   
                    </Button>
                </ScrollView>

            </View>
            <View>

            </View>
        </View>
    )
}

export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
    },
    TextInputStyles: {
        borderColor: "#000",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    }
})
