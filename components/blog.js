import React, { useState } from 'react';
import { StyleSheet, Alert, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';


export default function Blog({ navigation }) {

    const [blog, setBlog] = useState({
        Comment: '',
        Likes: '',
        Views: ''
    })


    return (
        <View style={styles.container}>
            <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/p1.jpg')} style={styles.backgroundImage} />
            <View style={styles.header}>
                <Image source={require('C:/Users/Singh.DESKTOP-VM4G1KR/Desktop/Neha/Project/cakeapp/images/cake.png')} style={styles.logo}></Image>

            </View>
            <ScrollView>
                <View >
                    <Text style={{ textAlign: 'center', fontSize: 25, marginBottom: 20 }}>Blog 1</Text>

                    <Text style={[styles.field, { textAlign: 'center', fontSize: 18, marginBottom: 20 , height: "75%"  }]} numberOfLines={3000}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus augue id mauris pulvinar, nec molestie neque aliquet. Phasellus et purus magna. Morbi pretium, odio id molestie ultrices, lectus nisi posuere velit, non tempor tortor diam eget diam. Duis eget velit eu dolor eleifend viverra in non augue. Sed consequat, massa nec placerat ullamcorper, orci arcu sodales nulla, id maximus erat sapien nec felis. Proin eget orci eget nunc laoreet placerat nec gravida nunc. Vivamus justo nisi, posuere quis suscipit at, tincidunt ut nisl. Nulla sed diam lorem. Duis lobortis, arcu ultrices lobortis dignissim,  

                        Morbi interdum ligula et diam luctus rhoncus at ac diam. Aliquam erat volutpat. Integer rhoncus sem ac blandit consectetur. Mauris feugiat mollis turpis in laoreet. Aenean nisi mi, suscipit hendrerit elit nec, tincidunt porttitor urna. Nam elit quam, lobortis eu placerat sed, tincidunt vitae nunc. In sed posuere urna, in ullamcorper tortor. Mauris luctus iaculis arcu, sit amet laoreet ipsum blandit quis. In aliquet diam eget nisi luctus sagittis. Phasellus finibus, enim et placerat gravida, sem felis faucibus ex, quis accumsan turpis elit vel lacus. Nunc a ipsum orci. Etiam velit nunc,  

                        Mauris bibendum enim vel libero interdum rutrum. Cras at sapien vel ligula accumsan vulputate. Aliquam tincidunt vel massa se 
                    </Text>

                    <TextInput style={[styles.field, { marginTop: 20, height: 100 }]}
                        placeholderTextColor="black" placeholder="Write a Comment...." multiline type="textarea"
                        onChangeText={(text) => {
                            setBlog({
                                ...blog,
                                Comment: text
                            });
                        }} 
                    />
 
                    <TouchableOpacity
                        onPress={(e) => { firebase.database().ref('blogs/').push(blog); }}>
                    </TouchableOpacity>
                    <Text>{'\n'}</Text>

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
        borderWidth: 2,
        marginLeft: 4,
        //  backgroundColor:"#F0BEFA", 
        backgroundColor: '#8DFEF7',
        borderColor: "black",
        height: 40,
        fontSize: 18,
        padding: 10,
        paddingVertical: 5,
        borderRadius: 25,
        width: 330,
    },
    error: {
        fontSize: 15,
        color: "red",
        marginLeft: 20,
        marginBottom: 10,
    },
    button: {
        marginTop: 15,
        alignSelf: "center",
        backgroundColor: '#8DFEF7',
        width: "50%",
        borderRadius: 30,
        fontSize: 20,
        borderColor: "black",
        color: "black",
        borderWidth: 2,
        height: 32,
        textAlign: "center",
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.6,
        height: '100%',
        width: '100%'
    }


});











