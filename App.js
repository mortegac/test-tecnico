import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { Root } from "native-base";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

import store from './src/store/store'
import NavigationService from './src/navigation/NavigationService';
import CreateRootNavigator from './src/navigation/rootNavigation';

class App extends Component{
          
  render(){

    return (
        <Provider store={store}>
          <Root>
              <CreateRootNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
          </Root>
        </Provider>
    )}
}

export default App;