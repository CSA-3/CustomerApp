import React, {useState} from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ScrollView, TouchableOpacity,Image} from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Registration({navigation}) {
 
    const [disable,setDisable] = useState({
        Name:false,
        Email:false,
        Phone:false,
        CompanyName:false,
        Address1:false,
        Address2:false,
        Pincode:false,
        Landmark:false, 
        Password:false 
    })
    const [user,setUser] = useState({
        Name:'',
        Email:'',
        Phone:'',
        CompanyName:'',
        Address1:'',
        Address2:'',
        Pincode:'',
        Landmark:'', 
        Password:'' 
    })
   
    const [icon, setIcon] = useState("eye-slash")
    const [hidePassword, setHidePassword] = useState(true)
    const changeIcon = () => {
          icon !== "eye-slash"
            ? (setIcon("eye-slash"), setHidePassword(true))
            : (setIcon("eye"), setHidePassword(false))
        }

    function getEmails() {
       const db = firebase.database().ref();
       const dbtable = db.child("customers");
       dbtable.get().then((snapshot) => {
        if (snapshot.exists()) {
          const array2=snapshot.val();
          const userId=Object.keys(array2);    
          const countObj=userId.length; 
          for(var i=0;i<countObj;i++){
          dbtable.child(userId[i]).child("Email").get().then((snapshot)=>{
            Email.push(snapshot.val());
          }).catch((error)=>{
            console.log(error)
          })
          }
          } 
        else {
            console.log("Data Not available");
          }
        }).catch((error) => {
          console.error(error);
        });
      
        return Email;
    }

    function getPhone() {
        const db = firebase.database().ref();
        const dbtable =db.child("customers");
        dbtable.get().then((snapshot) => {
        if (snapshot.exists()) {
          const array2=snapshot.val();
          const userId=Object.keys(array2);
          const countObj=userId.length;
          // console.log(userId);
          for(var i=0;i<countObj;i++){
          dbtable.child(userId[i]).child("Phone").get().then((snapshot)=>{
            Phone.push(snapshot.val());
          }).catch((error)=>{
            console.log(error)
          })
          }
        } 
        else {
          console.log("Data Not available");
        }
        }).catch((error) => {
          console.error(error);
        });
  
        return Phone;
    }
  

    const [Email,setEmail]=useState([getEmails()])
    const [Phone,setPhone]=useState([getPhone()])
          

    return(
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.jpg')} style={styles.logo}></Image>
   
            </View> 
                <View style={{paddingBottom:25}}>
                    <Text style={{textAlign:'center',fontSize:18,marginTop:10}}>Welcome Dear User, Sign Up and Order</Text>
               
                    <Text style={styles.error}>{(disable.Name) && 'Please fill name only with alphabets.'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  FirstName LastName'} placeholderTextColor="#202020"
                        onChangeText={(text)=>{
                            setUser({
                                ...user,
                                Name:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^[a-zA-Z]{1,40}( [a-zA-Z\']{1,40})$/;
                                setDisable({
                                    ...disable,
                                    Name:(!pattern.test(user.Name))
                                }); 
                        }}
                    />
               
                    <Text style={styles.error}>{(disable.Email) && 'Invalid Email id'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  Email ID'} placeholderTextColor="#202020"
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
                   
                    <Text style={styles.error}>{(disable.Phone) && 'Invalid Mobile No'}</Text>                   
                    <TextInput style={styles.field} 
                        placeholder={'  Mobile No.'} placeholderTextColor="#202020"
                        keyboardType={"numeric"} 
                        onChangeText={(text)=>{ 
                            setUser({
                                ...user,
                                Phone:text
                            });
                        }}
                        onBlur={(e)=>{ 
                                const pattern = /^[6-9]\d{9}$/ 
                                user.Phone.trim();
                                setDisable({ 
                                    ...disable,
                                    Phone:(!pattern.test(user.Phone))
                                });  
                        }}
                    />
                     
                    <Text style={styles.error}>{(disable.Address2) && 'Invalid Company Name'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  Company Name (Optional)'} placeholderTextColor="#202020"
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                CompanyName:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^[a-zA-Z0-9\s\-\.\''\,\()]+$/; 
                                setDisable({
                                    ...disable,
                                    CompanyName:(!pattern.test(user.CompanyName))
                                }); 
                        }}
                    />
                    
                    <Text style={styles.error}>{(disable.Address1) && 'Invalid Address'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  Flat No-Wing, Building Name'} placeholderTextColor="#202020"
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Address1:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^[a-zA-Z0-9\s\-\.\''\,]+$/; 
                                setDisable({
                                    ...disable,
                                    Address1:(!pattern.test(user.Address1))
                                }); 
                        }}
                    />
                  
                    <Text style={styles.error}>{(disable.Address2) && 'Invalid Address'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  Street/Lane, Area'} placeholderTextColor="#202020"
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Address2:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^[a-zA-Z0-9\s\-\.\''\,\()]+$/; 
                                setDisable({
                                    ...disable,
                                    Address2:(!pattern.test(user.Address2))
                                }); 
                        }}
                    />
              
                    <Text style={styles.error}>{(disable.Landmark) && 'Invalid Landmark'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  Landmark (Optional)'} placeholderTextColor="#202020"
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Landmark:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^[a-zA-Z0-9\s\-\.\''\,\()]+$/; 
                                setDisable({
                                    ...disable,
                                    Landmark:(!pattern.test(user.Landmark))
                                }); 
                        }}
                    />
                     
                
                    <Text style={styles.error}>{(disable.Pincode) && 'Invalid Pincode'}</Text> 
                    <TextInput style={styles.field} 
                        placeholder={'  Pincode'} placeholderTextColor="#202020"
                        keyboardType={"numeric"} 
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Pincode:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^[1-9][0-9]{5}$/; 
                                setDisable({
                                    ...disable,
                                    Pincode:(!pattern.test(user.Pincode))
                                }); 
                        }}
                    />
                    <View style={{flexDirection:'row'}}> 
                    <Text style={styles.error}>{(disable.Password) && 'Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character.'}</Text>
                    <TextInput style={styles.field} 
                        secureTextEntry={hidePassword}
                        placeholder={'  Password (Minimum 8 Characters)'} placeholderTextColor="#202020"
                        onChangeText={(text) => {
                            setUser({
                                ...user,
                                Password:text
                            });
                        }} 
                        onBlur={(e)=>{ 
                                const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; 
                                setDisable({
                                    ...disable,
                                    Password:(!pattern.test(user.Password))
                                }); 
                        }}
                    />
                    <Icon style={{marginTop:32}} name={icon} size={20} onPress={()=>changeIcon()}/>
                    </View>
                      
                    
                </View>
                <View style={{alignItems:'center',flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity style={styles.button}  
                        onPress={(e)=>{
                            
                            if(disable.Name==false && disable.Email==false && disable.Phone==false && disable.Address1==false && disable.Address2==false &&  disable.Pincode==false && disable.Password==false ) 
                            {

                                    if(Email.includes(user.Email)||Phone.includes(user.Phone))
                                    {
                                        Alert.alert("Error","Your email id or phone no is already registrated. Please login",[
                                            { text: "OK", onPress: () => {console.log("You Pressed OK"); }}
                                        ])
                            
                                    }
                                    else
                                    {
                                        if( user.Name=='' || user.Phone=='' || user.Email=='' || user.Address1=='' || user.Address2=='' ||  user.Pincode=='' || user.Password=='')
                                        {
                                            Alert.alert("Error","Please fill the details properly",[
                                                { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(disable)}}
                                            ])
                                        }
                     
                                        else{
                                            firebase.database().ref('customers/').push(user); 
                                            Alert.alert("Sign Up Sucessful","Please Login in ",[
                                            { text: "OK", onPress: () => {console.log("OK Pressed"); }}
                                            ])
                         
                                         }
                                    }
                            }      
                            else{
                                Alert.alert("Error","Please fill the details properly",[
                                { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(disable)}}
                                ])
                                // e.target.reset()
                            }
                       }}
                          
                    >
                        <Text style={{fontSize:20,fontWeight:'bold' }} >Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}> 
                   <Text style={{fontSize:20,fontWeight:'bold' }} onPress={(e)=>navigation.navigate("Register")}>Cancel</Text> 
                   </TouchableOpacity>
                </View>
 
                <View style={{flexDirection:"row"}}>
                    <Text>Already have an account? </Text>
                   <TouchableOpacity onPress={(e)=>navigation.navigate("Login")}><Text style={{textDecorationLine:"underline",color:"red"}}>Login Here</Text></TouchableOpacity>
                </View>
                
            </ScrollView>
        </View>  
    )
}    

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:'white',
    },
    header: {  
      backgroundColor:"pink",
      width:"100%",
      padding:7, 
      height:250,
      alignItems:"center",
      justifyContent:"center", 
      paddingTop:20,
      backgroundColor:"white", 
    },     
    logo:{
    height:70,
    width:550,
    borderRadius:30, 
    resizeMode: 'contain',
    },  
    field: {
      borderWidth:2,
      marginLeft:4,
      marginRight:10,
      marginTop:10,
      borderColor:"black" ,
      height:40,
      fontSize:15,
      padding:10,
      paddingVertical:5,
      borderRadius: 25,
      marginVertical:-10, 
    },
    error: {
        fontSize:15,
        color:"red",
        marginLeft:20,
        marginBottom:10,
    },
    button: {
        backgroundColor: 'pink',
        alignItems:'center',
        width: 150,
        borderRadius:25,
        padding:5,
        marginBottom:20,
        borderColor:"black" ,
        color:"black",
        borderWidth:2 
    }
});  

 
    
   

   