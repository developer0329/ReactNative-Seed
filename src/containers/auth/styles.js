import { StyleSheet } from 'react-native';
import { Metrics } from '@theme/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  subcontainer1:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },  
  logo:{
    width: 74,
    height: 74,
    marginTop: 80,
  },
  welcome: {
    fontSize: 24,
    textAlign: "center",  
    marginTop: 20,
  },
  subcontainer2:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 60,
    paddingRight: 60,
  },  
  input: {
    borderRadius: 5,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    height: 40,
    width: Metrics.screenWidth - 120,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button:{
    padding:10,
    height:45,
    width: Metrics.screenWidth - 120,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: '#f6b498'
  },
  registration: {
    height: 45,
    borderColor:'#e6e6e6',
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});