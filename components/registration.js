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
            <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/sn.png')} style={styles.backgroundImage} />
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.png')} style={styles.logo}></Image> 
            </View>  
                <ScrollView>
                <View  >
                    <Text style={{textAlign:'center',fontSize:18,marginTop:10}}>Welcome Dear User, Sign Up and Order</Text>
               
                    <Text style={styles.error}>{(disable.Name) && 'Please fill name only with alphabets.'}</Text>
                    <TextInput style={styles.field} 
                        placeholder={'  FirstName LastName'} placeholderTextColor="black"
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
                        placeholder={'  Email ID'} placeholderTextColor="black"
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
                        placeholder={'  Mobile No.'} placeholderTextColor="black"
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
                        placeholder={'  Company Name (Optional)'} placeholderTextColor="black"
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
                        placeholder={'  Flat No-Wing, Building Name'} placeholderTextColor="black"
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
                        placeholder={'  Street/Lane, Area'} placeholderTextColor="black"
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
              
                    <Text style={styles.error}>{(disable.Landmark) && 'black'}</Text>
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
                        placeholder={'  Pincode'} placeholderTextColor="black"
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
                    <View style={[styles.field,{flexDirection:'row',marginLeft:0,marginRight:0,marginTop:20,justifyContent:'space-evenly',paddingLeft:15}]}>
                    <TextInput  style={{width:300,marginLeft:10,marginRight:10,fontSize:17}}
                        secureTextEntry={hidePassword}
                        placeholder={'  Password '} placeholderTextColor="black"
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
                    <Icon style={{width:40}} name={icon} size={20} onPress={() => changeIcon()}/>
                  </View>
                  
                <View style={{alignItems:'center',flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity 
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
                              
                            }
                       }}
                          
                    >
                        <Text  style={styles.button} >Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity > 
                   <Text style={styles.button} onPress={(e)=>navigation.navigate("Home")}>Cancel</Text> 
                   </TouchableOpacity>
                </View>
 
                <View style={{flexDirection:"row", alignSelf:"center",marginTop:10,marginBottom:10}}>
                    <Text style ={{ fontWeight:'bold'}}>Already have an account? </Text>
                   <TouchableOpacity onPress={(e)=>navigation.navigate("Login")}><Text style={{textDecorationLine:"underline",color:"red", fontWeight:'bold'}}>Login Here</Text></TouchableOpacity>
                   </View>

                   </View>
                   </ScrollView>
           
            </View>  
    )
}    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        //backgroundColor:'#8EFDF6',
    },
    header: {
        height: 140,
        width: 345,
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 70,
        borderTopLeftRadius: 70,
        backgroundColor: '#F9C0F8',
        marginTop: 8,
        borderColor: "#FF6FFC",
        borderWidth: 2,
    },
    logo: {
        height: 65,
        width: 311,
        borderRadius: 70,
        //borderColor: "#FF6FFC",
        resizeMode: 'contain',
        //borderWidth: 2,
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
        width: 130, 
        borderRadius:30, 
        fontSize:20,  
        borderColor:"black" ,
        color:"black",
        marginLeft:10,
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

 
    
   

   
