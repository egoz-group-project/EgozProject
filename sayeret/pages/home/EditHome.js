import React , {useEffect, useState} from "react";
import {StyleSheet, Text, View, SafeAreaView , TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { db } from "../../firebase";
import { collection, query, getDocs, updateDoc, doc } from "firebase/firestore";

const EditHome = props => {

    const [numbers, setNumbers] = useState([]);
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [members, setMembers] = useState("");
    const [years, setYears] = useState("");
    const [seniors, setSeniors] = useState("");
    const [projects, setProjects] = useState("");
    const [faceInpute , setFaceInput] = useState("")
    const [instaInput , setInstaInput] = useState("")

    useEffect(async ()=>{
        
        const q = query(collection(db, 'edits'));
        const docs = await getDocs(q);
        docs.forEach(doc=>{
            const data = doc._document.data.value.mapValue.fields
            if(doc.id=="numbers"){
                let member = data.members.stringValue;
                let projects = data.projects.stringValue;
                let seniors = data.seniors.stringValue;
                let years = data.years.stringValue;
                setNumbers([years,member,projects,seniors]);
            }
            if(doc.id == "facebook"){
                setFacebook(data.link.stringValue)
            }
            if(doc.id == "instagram"){
                setInstagram(data.link.stringValue)
            }
            
        })
    },[])

    const handleSubmit = ()=>{
        let flag = false;

        if (members!="") {
            updateDoc(doc(db,'edits','numbers') , {members:members});
            flag = true
        }
        if (years!="") {
            updateDoc(doc(db,'edits','numbers') , {years:years});
            flag = true
        }
                
        
        if (flag == true) {
            Alert.alert ("השינויים נשמרו בהצלחה")
        }
        else {
            Alert.alert ("לא נעשו שינויים")
        }
        props.navigation.goBack();
        props.navigation.navigate('home');
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style = {styles.textStyle}> באנר המספרים: </Text>
                <View>
                    <Text style = {styles.textStyle}> שנות העמותה: </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder={numbers[0]}
                        value = {years}         
                        keyboardType = 'number-pad'           
                        placeholderTextColor={"grey"}
                        onChangeText={text=>setYears(text)}
                        />
                    <Text style = {styles.textStyle}> כמות חברים בעמותה: </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder={numbers[1]}
                        value = {members}     
                        keyboardType = 'number-pad'               
                        placeholderTextColor={"grey"}
                        onChangeText={text=>setMembers(text)}
                        />
                    <Text style = {styles.textStyle}> כמות פרוייקטים פעילים: </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder={numbers[2]}
                        value = {projects}      
                        keyboardType = 'number-pad'              
                        placeholderTextColor={"grey"}
                        onChangeText={text=>setProjects(text)}
                        />
                    <Text style = {styles.textStyle}> כמות בוגרי היחידה: </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder={numbers[3]}
                        value = {seniors}      
                        keyboardType = 'number-pad'              
                        placeholderTextColor={"grey"}
                        onChangeText={text=>setSeniors(text)}
                        />
                </View>

                <Text style = {styles.textStyle}>קישורים חדשים: </Text>
                <View style = {{paddingBottom: 20}}>
                    <Text style = {styles.textStyle}> קישור לדף הפייסבוק: </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder={facebook}
                        value = {faceInpute}                    
                        placeholderTextColor={"grey"}
                        onChangeText={text=>setFaceInput(text)}
                        />                    
                </View>

                <View style = {{paddingBottom: 20}}>
                    <Text style = {styles.textStyle}> קישור לדף האינסטגרם: </Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder={instagram}
                        value = {instaInput}                    
                        placeholderTextColor={"grey"}
                        onChangeText={text=>setInstaInput(text)}
                        />                    
                </View>

                {/* save changes button */}
                <TouchableOpacity style = {styles.buttons} onPress = {handleSubmit}>
                    <Text style= {styles.buttonText} >שמירת שינויים</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
            /*
            edit video link

            edit numbers
            */

    )
    
}
export default EditHome

const styles = StyleSheet.create({
    container: {
        height: '200%',
        paddingBottom: 70, 
        display: 'flex',
        
    },

    headName: { 
        alignItems: 'center', 
        marginTop: 20, 
    },

    imageStyle: {
        height:120, 
        width:120, 
        backgroundColor:'white', 
        borderRadius:100,
    },

    itemLayout: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
        width: '100%',
        alignContent: 'center',
        
    }, 

    textStyle: {
        fontSize: 17,
        paddingTop: 3,
        margin: 5,
        textAlign: 'left',
        
        
    },
    input: {
        height:40,
        borderRadius: 12,
        paddingRight:10,
        margin:5,
        paddingLeft: 7,
        borderWidth:1,
        textAlign: 'right',
        

     },
     buttons:{
        alignSelf:'center',
        alignItems:'center',
        width:'85%',
        color:'blue',
        height:40,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:8,
        display:'flex',
        justifyContent:'center',
        margin: 15,
     },
     buttonText:{
        color: "black",
        textAlign: 'center',
        fontWeight:"bold",
     
    },
})