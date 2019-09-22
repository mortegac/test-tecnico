// ____________________________________________________________________

// Error Text from common Library
// ____________________________________________________________________
import React from 'react';
import { View, Text } from 'react-native';


const _ErrorText = ({ textError, frColor, margin }) => {
  const { errorTextStyle } = styles;

  return (
    <View>
      { textError ? <Text style={ [
                                    errorTextStyle, { 
                                      color: (frColor? frColor: '#FF5666'),
                                      marginTop:(margin? margin : 0)
                                    }] }>{textError}</Text> : null }
    </View>
  );
};

const styles = {
  errorTextStyle: {
    // color: '#FF5666',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    marginBottom: 10,
  },
};

export { _ErrorText };
