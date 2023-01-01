import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Exercise from '../Exercise';
import Exercise2 from '../Exercise2';
import MashButton from './CustomButton';
import Header from './Header';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Appp = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const onPressHandler = () => {
    if(name.length > 3) {
      setSubmitted(!submitted);
    }else{
      setShowWarning(true);
      // Alert.alert("Warning", "The name must be longer than 3 characters", [
      //   {text: "DO NOT SHOW AGAIN", onPress: ()=>console.warn('DO NOT SHOW AGAIN pressed')},
      //   {text: "CANCEL", onPress: ()=>console.warn('CANCEL pressed')},
      //   {text: "OK", onPress: ()=>console.warn('OK pressed')},
      // ], {cancelable: true, onDismiss: ()=>console.log('Alert dismissed')})
      // ToastAndroid.show(
      //   "The name must be longer than 3 characters",
      //   ToastAndroid.SHORT
      // )
    }
    
  }
  
  return (
    <ImageBackground style={styles.body} source={{uri: "https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png"}}>
      <Header />
<View style={styles.body}>
      <Modal 
        visible={showWarning}
        onRequestClose={()=>setShowWarning(false)}
        transparent
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>Name should have atleast 4 characters</Text>
            </View>
            <Pressable
              onPress={()=>setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: '#fff'}}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View> 
        </View>       
      </Modal>
      <Text style={styles.text}>
        Please write your names: 
      </Text>
      <TextInput
        onChangeText={(value)=>setName(value)} 
        style={styles.input}
        placeholder='e.g John'
      />
      {/* <Button 
        title={submitted ? 'Clear':'Submit'}
        onPress={onPressHandler}
        disabled={submitted}
        color="black"
      /> */}
      {/* <TouchableOpacity 
        style={styles.button} 
        onPress={onPressHandler}
        activeOpacity={0.6}
        >
        <Text style={styles.text}>
          {submitted ? 'Clear':'Submit'}
        </Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight 
        style={styles.button} 
        onPress={onPressHandler}
        // activeOpacity={0.6}
        underlayColor="blue"
        >
        <Text style={styles.text}>
          {submitted ? 'Clear':'Submit'}
        </Text>
      </TouchableHighlight> */}
      {/* <TouchableWithoutFeedback 
        onPress={onPressHandler}
        >
          <View style={styles.button}>
            <Text style={styles.text}>
            {submitted ? 'Clear':'Submit'}
          </Text>
          </View>
      </TouchableWithoutFeedback> */}
      {/*
      Pressable have more features than button
      hitSlop
      onPress
      onLongPress
      delayLongPress
      android_ripple
      
      
      */}
      <MashButton 
        title="Submit"
        onPressFunction={onPressHandler}
      />
      {
        submitted ? 
        <View style={styles.body}>
          <Text>Registered as: {name}</Text>
          <Image
            source={require("../assets/done.png"), {uri: 'https://riotracers.com/static/media/logo-orange.ed45f048.png'}}
            resizeMode='stretch'
            style={styles.image}
          />
          <Image
            source={{uri: "https://raw.githubusercontent.com/mahdi-sharifimehr/RN-Tutorial-Main/RN-Tutorial-15/assets/done.png"}}
            resizeMode='stretch'
            style={styles.image}
            // blurRadius={100}
          />
        </View>:
        <Image 
          style={styles.image}
          source={require('../assets/error.png')} 
          resizeMode="stretch"
        />
      }
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    // textTransform: 'capitalize',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    fontSize: 20,
    margin: 10
  },
  button: {
    backgroundColor: '#00ff00',
    alignItems: 'center',
    width: 150,
    padding: 20
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export default Appp;
