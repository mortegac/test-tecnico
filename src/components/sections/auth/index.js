import React, {Component} from 'react';
import {connect} from 'react-redux'

import { StyleSheet, Text, View } from 'react-native';
import { loadingInit } from '../../../store/loading/Actions';

  class Auth extends Component {

    componentDidMount(){ 
      const {loadingInit} = this.props;
      loadingInit();
    }
  
    render() {
      return (
          <View style={styles.container}>
            <Text>Open up Auth.js to start working on your Auth!</Text>
          </View>
        )};
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default Auth;


const mapStateToProps = state => ({   ...state    });
const mapDispatchToProps = dispatch => ({
  loadingInit: () => dispatch(loadingInit())
});
export default connect(mapStateToProps, mapDispatchToProps)(Auth);