import React, { Component } from 'react';
import { Toast } from 'native-base';
import { connect } from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import { navigation } from 'react-navigation';
    

// import { register } from '../../../actions/users';

import { APP_GRAY_TEXT, APP_WHITE, APP_PURPLE  } from '../../../constants/colorPalette';
import {_Containner, _Button, _Input} from '../../../components/commons/'
import { Header, Form, BoxLabel, BoxButtonIco, Title, Label } from './indexStyle';
import { setUser, setLogout } from '../../../store/users/actions';

const styles = {
  BoxInputError:{
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor:'#FF2D55',
  }
}; 
class RegisterScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation:'',
      validateEmail: true,
    };
  }
  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
      this.setState({validateEmail:false})
      this.setState({email:text})
      return false;
      }
    else {
      this.setState({validateEmail:true})
      this.setState({email:text})     
      return true;
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
        header: () => null,
        headerTitleStyle: {
        color: APP_WHITE
      }, 
      headerStyle: {
        backgroundColor: APP_PURPLE,
        color: '#fff',
        height: 10,
        marginTop: 0,
        marginBottom: 0,
        elevation: null,
        },
    };
};
logoutPress(){
  const {setLogout} = this.props;
  setLogout();
}
registerPress(){
  const {email, password, password_confirmation} = this.state;
  const {setUser} = this.props;

  if (this.validate(email)){
    let userData = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }       
      if(userData.password !==null && userData.password !==''){
        if(password === password_confirmation){
          return setUser(userData)
        }else{
          Toast.show({
            text: `Ambas contraseñas deben ser iguales `,
            duration: 3000,
            type: "error"
            });
        }
        
      }else{
        Toast.show({
          text: `Ingrese una contraseña`,
          duration: 3000,
          type: "warning"
          });
      }
  }else {
    Toast.show({
      text: `Ingrese un email válido`,
      duration: 3000,
      type: "warning"
      });
    this.state.validate=false;
  } 
}
redirect(route) {
  this.props.navigation.navigate(route);
  
}

  render() {
    const { navigation } = this.props;
    const { validateEmail } = this.state;
    return (
      <_Containner style={{ backgroundColor: '#EFEFF4'}}>
      <Header>
        <Title>Registrarse</Title>
        <TouchableOpacity
          onPress={() => {this.logoutPress()} }        
          style={{ paddingRight: 20 }}
        >
          <Feather name="x" size={ 30 } iconStyle={{marginRight: 0}} color={APP_WHITE} />
        </TouchableOpacity>
      </Header>
      <Form>
        <BoxLabel style={{ marginBottom: 12 }}>
          <Label>Email</Label>
        </BoxLabel>
        <BoxButtonIco style={[{ marginBottom: 30, }, validateEmail ? {borderColor:'#FF2D55'} : styles.BoxInputError ]}>
            <_Input
              placeholder='email@domain.cl'
              placeholderTextColor= {APP_GRAY_TEXT}
              style={[{ 
                width:'85%' ,
                height: 50, 
                paddingLeft: 10, 
                fontSize: 14, 
                marginBottom:5,
                borderColor:'#D0CCCC' 
                }]}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address' 
              autoFocus={true}
              autoCapitalize='none'
              placeholderTextColor= 'gray'
              onChangeText={(text) => this.setState({ email: text })}
            />
        </BoxButtonIco>



       
        <BoxLabel style={{ marginBottom: 12 }}>
            <Label>Contraseña</Label>
        </BoxLabel>
        <BoxButtonIco style={{ marginBottom: 12 }}>
          <_Input
              secureTextEntry
              placeholder='Ingrese Contraseña'
              style={{ 
                width:'85%' ,
                height: 50, 
                paddingLeft: 10, 
                fontSize: 14, 
                marginBottom:5, 
                borderColor:'#D0CCCC' }}
              ref={(input)=> this.passwordInput = input}
              onChangeText={(text) => this.setState({ password: text })} 
              // onChangeText={ password => this.setState({ password })}
              autoCapitalize='characters'
              placeholderTextColor= 'gray'
          />
        </BoxButtonIco>
        <BoxLabel style={{ marginBottom: 12 }}>
            <Label>Repita Contraseña</Label>
        </BoxLabel>
        <BoxButtonIco style={{ marginBottom: 12 }}>
          <_Input
              secureTextEntry
              placeholder='Ingrese Contraseña'
              style={{ 
                width:'85%' ,
                height: 50, 
                paddingLeft: 10, 
                fontSize: 14, 
                marginBottom:5, 
                borderColor:'#D0CCCC' }}
              ref={(input)=> this.passwordInput = input}
              onChangeText={(text) => this.setState({ password_confirmation: text })} 
              autoCapitalize='characters'
              placeholderTextColor= 'gray'
          />
        </BoxButtonIco>        
        <_Button
            onPress={() => {this.registerPress()} }
            style={{ 
              backgroundColor: APP_WHITE, 
              width:'44%' ,
              height: 50,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center', 
              marginBottom:0,
              marginTop:20,
              borderWidth: 1,
              borderColor: APP_PURPLE,
            }}
            text="REGISTRARSE"
            textColor={ APP_PURPLE }
          />
          <_Button
            onPress={() => { navigation.goBack() }}
            style={{
                backgroundColor: APP_PURPLE ,
                width:'44%' ,
                height: 50,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:15,
                marginTop:5,
            }}
            text="Volver"
            textColor='#fff'
          />

        
      </Form>
    </_Containner>
      )}


}


const mapStateToProps = state => {
  return { 
    user: state.user,
    loading: state.loading  
  }
}; 

const mapDispatchToProps = dispatch => ({
  setUser: (payload) => dispatch(setUser( payload )),
  setLogout: () => dispatch(setLogout()),

});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);