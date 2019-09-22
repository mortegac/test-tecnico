// ____________________________________________________________________

// Input Custom from common Library
// Se transforma a component de clase, ya que antes era stateless y 
// provoco error con React 16.x
// ____________________________________________________________________
import React,{Component} from 'react';
import { TouchableOpacity, Text, Image  } from 'react-native';

  // TODO: _Button Convertir en funcion
class _Button extends Component {
  render() {
    return (
      <TouchableOpacity  { ...this.props }>
        <Image source={this.props.image} style={{marginRight: 10}}/>
        <Text style={{ color: this.props.textColor, fontSize: this.props.textSize }}>{this.props.text}</Text>
      </TouchableOpacity>
    )
}}
export { _Button };
