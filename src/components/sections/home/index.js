import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import {TouchableOpacity, Text, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { setLogout } from '../../../store/users/actions';
import {APP_WHITE, APP_PURPLE } from '../../../constants/colorPalette';
import {_Containner, _CardInfo, } from '../../../components/commons/'
import {
  Header, 
  Title
} from './indexStyle';

class HomeScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataPost: []
    };
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


redirect(route) {
  this.props.navigation.navigate(route);
}

  render() {
    const { posts, users: {email}, setLogout } = this.props;
   
    return (
      <_Containner style={{ backgroundColor: '#EFEFF4'}}>
      <Header>
        <Title>Home</Title>
        <Text>{email}</Text>
        <TouchableOpacity  
          onPress={() => setLogout() }
          style={{ paddingRight: 20 }}
          >
          <Feather name="x-circle" size={ 30 } iconStyle={{marginRight: 30}} color={APP_WHITE} />
        </TouchableOpacity>
      </Header>
        
      <ScrollView>
       { 
         
          posts && posts.map( (item, index) => {
            console.log('-- item --', item);
            if(item.title){
              return (
              
                <_CardInfo key={index} {...item}/>
              )
            }
          })  
        }

      </ScrollView>  
    </_Containner>
      )}


}

const mapStateToProps = state => {
  const data = [];
  const postsFb = state.firestore.data.posts;
  
  if(postsFb){
    Object.entries(postsFb).forEach(doc => {

      data.push({
        id: doc[0],
        ...doc[1],
        //date: doc[1].hasOwnProperty('date') ? new Date(doc[1].date['seconds']*1000): new Date()
      });

    })
  }

  return { 
    users: state.users,
    posts: data,
    loading: state.loading  
  }
}; 

const mapDispatchToProps = dispatch => ({
  setLogout: () => dispatch(setLogout()),

});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      { collection : 'posts'}
    ])
  )(HomeScreen);