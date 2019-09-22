import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {TouchableOpacity, Text, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Spinner } from 'native-base';

import { getPost } from '../../../store/posts/actions';
import { setLogout } from '../../../store/users/actions';
import {APP_WHITE, APP_PURPLE, APP_RED} from '../../../constants/colorPalette';
import {_Containner, _CardInfo, } from '../../../components/commons/'
import {
  Header, 
  Title
} from './indexStyle';

class HomeScreen extends Component {
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



componentDidMount(){

  this.getDataPost();


}

// _getRealTimeData = () => {

//   firebase.database().ref('posts/').on('value', (snapshot) => {
    
//     console.log("snapshot: " + snapshot.val());
//   });

//   console.log('app().name: ', firebase.app().name); 
//   const realTimeDatabaseRef = firestore.collection("posts").doc("realTime");

//   // const ref = firestore.collection('posts');
//   // console.log('ref:', ref); 

//   console.log(firestore);
//   realTimeDatabaseRef.onSnapshot( doc => {

//       console.log('--------------- Realtime Database ---------------');

//       if (doc.exists) console.log(doc.data());
//       else console.log('El documento no existe');

//       console.log('-----------------------------------------------');

//   })



// };

getDataPost = () => {

  const { getPost } = this.props;
  getPost();
  
}

redirect(route) {
  this.props.navigation.navigate(route);
  
}

  render() {
    const { posts: {list}, loading: {fetching}, loading: {type}, users: {email}, setLogout } = this.props;
    
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
          (type==='posts-get') ?
          // (fetching===true) ?
            <Spinner color={ APP_RED } style={{ padding: 10 }}/>
          :null
        }
     
        { 
          Object.keys(list).map((item, index) => {
            return (
                           
                <_CardInfo key={index} {...list[item]}/>
             
            )
          })
        }

      </ScrollView>  
    </_Containner>
      )}


}

HomeScreen.propTypes = {
  getPost: PropTypes.func,
  setLogout: PropTypes.func,
  users: PropTypes.object,
  posts: PropTypes.object,
  loading: PropTypes.object,
};

const mapStateToProps = state => {
  return { 
    users: state.users,
    posts: state.posts,
    loading: state.loading  
  }
}; 

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(getPost()),
  setLogout: () => dispatch(setLogout()),

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);