// ____________________________________________________________________

// Input Custom from common Library
// Se transforma a component de clase, ya que antes era stateless y 
// provoco error con React 16.x
// ____________________________________________________________________
import React,{Component} from 'react';
import { TextInput } from 'react-native';


// TODO: _Input Convertir en funcion
class _Input extends Component {
  render() {
    
  ///const { placeholder, secureTextEntry, value, onChangeText } = this.props;
  // const _default = {
  //   style: styles.inputStyle,
  //   underlineColorAndroid: "transparent",
  // };

  // const _props = { ..._default, ...this.props }

  return (
        <TextInput
          { ...this.props }

          />
        );
      }}
      

      
// placeholder={placeholder}
// autoCorrect={false}
// secureTextEntry={ !!(secureTextEntry) }
// style={styles.inputStyle}
// underlineColorAndroid="transparent"
// placeholderTextColor="white"
// value={value}
// onChangeText={onChangeText}


// const _Input = ({
//  label, value, onChangeText, placeholder, secureTextEntry 
// }) => {
//   const { inputStyle, labelStyle, containerStyle } = styles;

//   return (
//     <TextInput
//       placeholder={placeholder}
//       autocorrect={false}
//       secureTextEntry={ !!(secureTextEntry) }
//       style={inputStyle}
//       underlineColorAndroid="transparent"
//       placeholderTextColor="white"
      
//       value={value}
//       onChangeText={onChangeText}
//     />
//   );
// };


const styles = {
  inputStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // borderWidth: 1,
    lineHeight: 23,
    padding: 10,
    height: 60,
    width: '100%',
    marginBottom: 20,
    borderBottomWidth: 1,
    fontSize: 18,
  },
};

export { _Input };
