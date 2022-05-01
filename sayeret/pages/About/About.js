import { StyleSheet, Text, View,ScrollView, Image,ImageBackground} from 'react-native'
import React from 'react'
import Unit from '../../assets/Images/egoz_pic.png';

const About = () => {
  return (
    <ScrollView style = {styles.container}>
        <View >
          <ImageBackground style={styles.image} source= {Unit} resizeMode='cover'>
            <Text style = {styles.title}> על היחידה </Text>
          </ImageBackground>
        
        </View>

        <View>
            <Text style = {styles.content}>יחידת אגוז הוקמה בשנת 1995 ונקראה על שמה של סיירת “אגוז” המיתולוגית.
                 היחידה הוקמה על מנת להביא למהפך ביכולות צה”ל מול ארגון הטרור “חיזבאללה”-
                 ולהכריע את האויב בכל מפגש. עד היום “אגוז” מתמחה בלוחמת גרילה – 
                ומביאה את יכולותיה הייחודיות על מנת להכריע כל אויב בכל מקום.
                 תמצית הרוח של אגוז באה לידי ביטוי בסיסמת היחידה:
                 “ארדוף אויביי ואשיגם ולא אשוב עד כלותם”.
               “אגוז” מתמחה בלחימה בטווחים קרובים, בשטח סבוך, בשדאות, הסוואה וכן בלוחמה זעירה 
               – לחימת טווח קצר שבה איכותו ומקצועיותו של הלוחם מהוות את המרכיב העיקרי להצלחתה. 
               היחידה פועלת בכל זמן, בכל זירה ובכל גזרה ותמיד מנצחת!
               </Text>
        </View>

        <View>
          <ImageBackground style={styles.image} source={require('../../assets/Images/amuta_egoz.png')} resizeMode='cover' >
            <Text style = {styles.title}>על העמותה</Text>
          </ImageBackground>

        </View>

        <View>
          <Text style = {styles.content}>
                  עמותת הסיירת הצפונית הוקמה לאחר מלחמת יום הכיפור, מורכבת מבוגרי היחידה והמשפחות השכולות
                 , מטרתה היינו טיפוח היחידה, לוחמיה ובוגריה, והנצחת חללי היחידה.
                 העמותה רשומה במרשם העמותות ועומדת בקריטריונים למנהל תקין
                 , פועלת תחת פיקוח ועדת ביקורת ועל ידי רואה חשבון ועורך דין, מוכרת לצורכי מס על פי סעיף 
                 46. חברי העמותה פועלים בהתנדבות על פי כישוריהם ובזמנם הפרטי. 
                 יעדי העמותה: ליווי היחידה הסדירה ולוחמיה
                 ,דאגה למשתחררים מהיחידה, הנצחת חללי היחידה ושימור קשר בין בוגרי היחידה והיחידה.
          </Text>
        </View>

        <View>
          <Text style = {styles.title}>1956 - הקמת סיירת אגוז</Text>
        </View>

        <View>
          <Text style = {styles.content}>סיירת אגוז הוקמה לראשונה בשנת 
            1956, כסיירת הפיקודית של פיקוד הצפון בהוראת יצחק רבין ז”ל
            , היחידה נסגרה ב1957 והוקמה מחדש 1963 עד לסגירתה לאחר מלחמת יום הכיפורים.</Text>
        </View>

        <View>
          <Text style = {styles.title}>1995 - הקמת יחידת אגוז</Text>
        </View>

        <View >
          <Text style = {styles.content}>“אגוז” הוקמה בינואר 1995 על מנת לנצח בכל מפגש מול חיזבאללה
            , תוך זמן קצר לוחמי היחידה החלו לקצור הצלחות
            . הכרעה בכל היתקלות ושינוי מאזן הכוחות בדרום לבנון
            . “ארדוף אויבי ואשיגם ולא אשוב עד כלותם…”</Text>
        </View>


        <View>
        <ImageBackground style={styles.image} source={require('../../assets/Images/commando_egoz.png')} resizeMode='cover' >
            <Text style = {styles.title}>2015 - הצטרפות לחטיבת הקומנדו</Text>
          </ImageBackground>
        </View>

        <View>
          <Text style = {styles.content}>חטיבת עֹוז (חטיבה 89), הידועה יותר בכינוי חטיבת הקומנדו
            , היא חטיבת חיל רגלים למבצעים מיוחדים של זרוע היבשה בצה”ל
            . החטיבה מאגדת תחתיה שלוש יחידות קומנדו – אגוז, מגלן ודובדבן.</Text>
        </View>
 
    </ScrollView>
  );
};


const styles = StyleSheet.create({
 container:{
   flex:1,
   
 },
 title:{
    //width:'100%',
    textAlign:'left',
   // justifyContent:'center',
    fontSize:26,
    fontWeight:'bold',
    margin:60,
    paddingRight:30,

  },
  content:{
    fontSize:20,
    paddingRight:10,
    paddingLeft:10,
  },

})
export default About