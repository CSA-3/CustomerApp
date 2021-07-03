import React, {useState} from 'react'
// import firebase from 'firebase';
import {StyleSheet, TouchableOpacity, View,Text,Image, TextInput,ScrollView, Alert} from 'react-native'


function ForgotPassword({navigation}) {
 
  const [disable,setDisable] = useState({ 
    Email:false, 
  })
  const [user,setUser] = useState({ 
    Email:'' 
  })
 
 
  
    return(
        <View style={styles.container}>
            <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/sn.png')} style={styles.backgroundImage} />
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.png')} style={styles.logo}></Image>
               
            </View> 
            <ScrollView>
                <View style={styles.login}>
                    <Text style={{textAlign:'center',fontSize:20,marginBottom: 20,marginTop: 90,fontWeight:'bold'}}>Forgot Password?</Text>
                    <Text style={styles.error}>{(disable.Email) && 'Invalid Email id'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  Enter your Email ID'} placeholderTextColor="#202020"
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Email:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                                setDisable({
                                    ...disable,
                                    Email:(!pattern.test(user.Email))
                                }); 
                        }}
                    />
                    <TouchableOpacity  
                     onPress={(e)=>{
                        
                        if(userinput.Email=='' )
                        {
                            Alert.alert("Error","Please dont leave the email box empty",[
                                { text: "OK", onPress: () =>{ console.log("OK Pressed")}}
                              ])
                        }
                        else{
                          
                        } 
                    }}> 
                    <Text style={styles.button}>Send Email</Text>
                    </TouchableOpacity>
                     
                     
            </View>
            </ScrollView>
            </View>
    
    )
}

    
export default ForgotPassword;

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
    field: {
        borderWidth:2, 
        marginLeft:4,  
        backgroundColor: '#BCFFFB',  
        borderColor:"black" ,
        height:40, 
        fontSize:17,
        padding:10,
        paddingVertical:5,
        borderRadius: 25, 
        width: 330, 
    },
    error: {
        fontSize:15,
        color:"red",
        marginLeft:20,
        marginBottom:10,
    },
    button: {
        marginTop:15,
        alignSelf:"center",
        backgroundColor: '#8DFEF7', 
        width: "50%", 
        borderRadius:30, 
        fontSize:20,  
        borderColor:"black" ,
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
        opacity: 0.7,
        height:'100%', 
        width:'100%'
      }

});  
 
