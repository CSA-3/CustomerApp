import React from 'react';
import {StyleSheet, View,Text,Image, TouchableOpacity} from 'react-native';



export default function Home({navigation}) {
 
  
    return(
        <View style={styles.container}>  
            <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/co.png')} style={styles.backgroundImage} />
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.png')} style={styles.logo}></Image>
               
            </View> 
                
            <TouchableOpacity > 
                   <Text  style={styles.button}  onPress={(e)=>navigation.navigate("Registration")}> Sign Up </Text> 
            </TouchableOpacity>
            <TouchableOpacity  > 
                   <Text style={styles.button}   onPress={(e)=>navigation.navigate("Login")}> Login </Text> 
            </TouchableOpacity> 
            <TouchableOpacity  > 
                   <Text style={styles.button}   onPress={(e)=>navigation.navigate("Blog")}> Read Blogs </Text> 
            </TouchableOpacity> 
            <TouchableOpacity  > 
                   <Text style={styles.button}   onPress={(e)=>navigation.navigate("Cart")}> Go to Cart </Text> 
            </TouchableOpacity> 
        </View>
    )
 
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        //backgroundColor:'#8EFDF6',
    },
    header: {    
        height:140, 
        width:345,
        alignItems:"center",
        justifyContent:"center",  
        borderBottomRightRadius :70, 
        borderTopLeftRadius :70, 
        backgroundColor:'#F9C0F8',
        marginTop:8,
        borderColor:"#FF6FFC" ,
        borderWidth:2,    
    },    
    logo:{
        height:65,
        width:311,
        borderRadius:70, 
        //borderColor:"#FF6FFC" ,
        resizeMode: 'contain',
        //borderWidth:2,    
    },
    button: {
        marginTop:15,
        alignSelf:"center",
        backgroundColor: '#F9C0F8', 
        width: 130, 
        borderRadius:30, 
        fontSize:20,  
        borderColor:"#FF6FFC" ,
        color:"black",
        borderWidth:2,    
        height:32,
        textAlign:"center",
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.6,
        height:'100%', 
        width:'100%'
      }

});
