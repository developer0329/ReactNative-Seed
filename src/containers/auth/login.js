import React from 'react';
import {View, Text, Image, TextInput, TouchableHighlight } from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

import { Images } from '@theme/'
import styles from './styles';

export default class extends React.Component {
    render(){
        const title = this.props.title || 'No Title';
        const data = this.props.data || 'No Data';
        return (
            <View style={[styles.container, this.props.style]}>
              <View style={[styles.subcontainer1]}>
                <Image source={Images.imgLogo} style={[styles.logo]} resizeMode={'cover'}></Image>
                <Text style={[styles.welcome]}>Aqual UI Kit</Text>
              </View>
              <View style={[styles.subcontainer2]}>
                <TextInput
                  placeholder={'Email'}
                  style={[styles.input]}></TextInput>
                <TextInput
                  placeholder={'Password'}
                  style={[styles.input]}></TextInput>
                <Button
                  containerStyle={[styles.button]}
                  style={{color: 'white'}}
                  onPress={() => Actions.loginModal2({ data:"Custom data2", title:"Custom title2" })}>Login</Button>
                <TouchableHighlight>
                  <Text style={{color:'#a6a6a6'}}>Lost Password?</Text>
                </TouchableHighlight>
              </View>
              <View style={[styles.registration]}>
                <Text style={{color:'#a6a6a6'}}>Registration</Text>
              </View>
            </View>
        );
    }
}
