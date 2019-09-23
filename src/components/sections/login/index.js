import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Toast } from 'native-base';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

// import { login, checkCredentials,  disableDevMode, enableDevMode } from '../../../actions/users';
import {
    APP_WHITE, 
    APP_PURPLE, 
    APP_GRAY_TEXT,
    APP_APP,
} from '../../../constants/colorPalette';

import {
    _Containner, 
    _Button, 
    _Input, 
    // _Spinner, 
    _ErrorText
} from '../../../components/commons'

import {
    Header, 
    Form, 
    BoxButtonIco, 
    TextSubTitle
} from './indexStyle';

import { getLogin } from '../../../store/users/actions';


const styles = {
    BoxInputError:{
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor:'#FF2D55',
    },
    MarginError:{
        marginTop: 10,
    }
};
//
class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validateEmail: true,
            statusInternet: null
        };
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerTintColor:'white',
            header: () => null,
            headerTitleStyle: {
                color: APP_WHITE
            },
            headerTitleStyle: {
                color: '#fff'
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


    redirect(route) {
        this.props.navigation.navigate(route);
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

      
    loginPress(){
        const {email, password} = this.state;
        const {getLogin} = this.props;

        if (this.validate(email)){
            let userData = {
                email: email,
                password: password
            }
            if(userData.password !==null && userData.password !==''){
                return getLogin(userData)
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

    render() {
        const { users } = this.props;
        const { validateEmail } = this.state;
        return (
            <_Containner>
                <StatusBar barStyle="light-content" backgroundColor={APP_PURPLE}/>
                <Header>
                    <TextSubTitle>App de test</TextSubTitle>
                </Header>
                <Form>
                    <BoxButtonIco style={[{ marginBottom: 30, }, validateEmail ? {borderColor:'#FF2D55'} : styles.BoxInputError ]}>
                        <Feather name="mail" size={ 20 } iconStyle={{marginBottom: 0, width: 22}} color={APP_GRAY_TEXT} />
                        <_Input
                            placeholder='E-Mail'
                            placeholderTextColor= {APP_GRAY_TEXT}
                            style={[{
                                width:'80%' ,
                                height: 50,
                                paddingLeft: 10,
                                fontSize: 14,
                                marginBottom:5,
                            }]}
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            autoFocus={true}
                            ref={(input) => { this.emailInput = input }}
                            onChangeText={(text) => this.validate(text)}
                        />
                    </BoxButtonIco>
                    <BoxButtonIco>
                        <Feather name="lock" size={ 20 } iconStyle={{marginBottom: 0, width: 22}} color={APP_GRAY_TEXT} />
                        <_Input
                            secureTextEntry={true}
                            placeholder='Contraseña'
                            placeholderTextColor= {APP_GRAY_TEXT}
                            style={{
                                width:'80%',
                                height: 50,
                                paddingLeft: 10,
                                fontSize: 14,
                                marginBottom:5,
                                borderColor:'#D0CCCC' }}
                            ref={(input)=> this.passwordInput = input}
                            onChangeText={(text) => this.setState({ password: text })}
                            autoCapitalize='characters'
                            keyboardType='default'
                        />
                    </BoxButtonIco>
                    { users.errorMsg ? 
                        <_ErrorText textError={`${users.errorMsg}`} frColor={APP_PURPLE} margin={10}/> 
                        : <_ErrorText textError=' ' frColor={APP_APP} margin={10}/> }
              
                    

                    <_Button
                        onPress={() => {this.loginPress()} }
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
                        text="INGRESAR"
                        textColor='#fff'
                    />

                    <_Button
                        onPress={() => this.redirect('Register')}
                        style={{
                            backgroundColor: APP_WHITE,
                            width:'44%' ,
                            height: 50,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom:0,
                            marginTop:0,
                            borderWidth: 1,
                            borderColor: APP_PURPLE,
                        }}
                        text="REGISTRARSE"
                        textColor={ APP_PURPLE }
                    />


                </Form>
            </_Containner>
        )}
}

const mapStateToProps = state => {
    return {
        users: state.users,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => ({
    getLogin: (payload) => dispatch(getLogin( payload )),
    // enableDevMode: () => dispatch(enableDevMode()),
    // disableDevMode: () => dispatch(disableDevMode()),
    // checkCredentials: (payload) => dispatch(checkCredentials( payload ))

});





export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);