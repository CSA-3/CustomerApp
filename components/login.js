import React, {useState} from 'react'
import firebase from 'firebase';
import {StyleSheet, TouchableOpacity, View,Text,Image, TextInput,ScrollView, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

function Login({navigation}) {
  const [icon, setIcon] = useState("eye-slash")
    const [hidePassword, setHidePassword] = useState(true)      
    const changeIcon = () => {
        icon !== "eye-slash"
        ? (setIcon("eye-slash"), setHidePassword(true))
        : (setIcon("eye"), setHidePassword(false))        
    }

  function getCredentials() {
        const dbRef = firebase.database().ref();
        const dbtable=dbRef.child("customers"); 
        dbtable.get().then((snapshot) => {
        if (snapshot.exists()) {
          const array2=snapshot.val();
          const userId=Object.keys(array2);
          const countObj=Object.keys(array2).length;
          var email,password;
          console.log(userId);
          for(var i=0;i<countObj;i++){
          dbtable.child(userId[i]).child("Email").get().then((snapshot)=>{
            email=snapshot.val()
        //    console.log(email)
            }).catch((error)=>{
            console.log(error);
          });
          dbtable.child(userId[i]).child("Password").get().then((snapshot)=>{
            password=snapshot.val()
            // console.log(password)
            dbObj.push({email,password})
            // console.log(dbObj)
            }).catch((error)=>{
            console.log(error);
          });
          
          }
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    
      return dbObj ;
      }
    

    const [userinput,setUserinput] = useState({
        username:'',
        password:''
    })
     
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
 

  function handlePasswordVisibility() {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  }
    const [dbObj,setdbObj] = useState([(getCredentials())])
    return(
        <View style={styles.container}>
            <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/fl.png')} style={styles.backgroundImage} />
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.png')} style={styles.logo}></Image>
               
            </View> 
            <ScrollView>
                <View >
                    <Text style={{textAlign:'center',fontSize:18,marginBottom: 20,marginTop: 80}}>Please Login</Text>
                    <TextInput style={styles.field} placeholderTextColor="black" placeholder="  Email"  
                        onChangeText={(text)=>{ 
                            setUserinput({
                            ...userinput,
                            username:text});
                        }}
                    /> 
                    
                    <View style={[styles.field,{flexDirection:'row',marginLeft:0,marginRight:0,marginTop:30,justifyContent:'space-evenly'}]}>
                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry={hidePassword}
                        placeholderTextColor="black"
                        style={{width:300,marginLeft:10,marginRight:10,fontSize:15}}
                        onChangeText={(text)=>{
                            setInput({
                                ...input,
                                Password:text
                            });
                        }
                        }
                    />
                    <Icon style={{width:40}} name={icon} size={20} onPress={() => changeIcon()}/>
                    </View>
                    <TouchableOpacity><Text style={{textDecorationLine:"underline",marginTop:20, fontWeight:'bold',textAlign:'center'}} onPress={(e)=>navigation.navigate("ForgotPassword")} >Forgot Password?</Text></TouchableOpacity>
                    <TouchableOpacity 
                     onPress={(e)=>{
                        
                        if(userinput.username=='' || userinput.password=='')
                        {
                            Alert.alert("Error","Please dont leave the boxes empty",[
                                { text: "OK", onPress: () =>{ console.log("OK Pressed")}}
                              ])
                        }
                        else{
                            const count=dbObj.length;
                            var foundemail,foundpass;
                            for(var i=1;i<count;i++){
                                if(dbObj[i].email==userinput.username){
                                    foundemail=1
                                    if(dbObj[i].password==userinput.password){
                                        // Alert.alert("Success","Sign up Succesfull",[
                                        //     { text: "OK", onPress: () =>{ console.log("OK Pressed");navigation.navigate('Dashboard')}}
                                        //   ])
                                          foundpass=1
                                          break;
                                    }
                                }
                            }
                            if(foundemail==1){
                                if(foundpass==1){
                                    Alert.alert("Success","Login Succesful",[
                                            { text: "OK", onPress: () =>{ console.log("OK Pressed");navigation.navigate('Home')}}
                                          ])
                                }
                                else{
                                    Alert.alert("Error","Wrong Password",[
                                        { text: "OK", onPress: () =>{ console.log("OK Pressed")}}
                                      ])
                                }
                            }
                            else{
                                Alert.alert("Error","Wrong Credentials",[
                                    { text: "OK", onPress: () =>{ console.log("OK Pressed")}}
                                  ])
                            }
                            
                           
                        } 
                    }}><Text style={styles.button}>Login</Text></TouchableOpacity>
                    <Text>{'\n'}</Text>
                    <View style={{flexDirection:"row",fontWeight:'bold',alignSelf:"center"}}>
                        <Text style ={{ fontWeight:'bold'}}>Don't have an account? </Text>
                        <TouchableOpacity onPress={(e)=>navigation.navigate("Registration")}><Text style={{textDecorationLine:"underline",color:"red", fontWeight:'bold'}}>Register Here</Text></TouchableOpacity>
                    </View>
            </View>
            </ScrollView>
            </View>
    
    )
}

    
export default Login;

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
        //  backgroundColor:"#F0BEFA", 
        backgroundColor: '#8DFEF7',  
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
        opacity: 0.5,
        height:'100%', 
        width:'100%'
      }



});  
 
