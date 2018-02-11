import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import Home from './src/components/Home';
import Chat from './src/components/Chat';
import {
  Router,
  Scene
} from 'react-native-router-flux';




type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}} >
          {/* The above Platform function sets the value for ios and android depending on what's being shown  */}
          <Scene key='home' component={ Home } title='Home' />
          <Scene key='chat' component={ Chat } title='Chat' />

        </Scene>
      </Router>


    );
  }
}

