/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Header from './Header';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('com.myApp.Header', () => Header);

Navigation.setDefaultOptions({
  popGesture: false,
  overlay: {
    handleKeyboardEvents: true,
  },
  topBar: {
    noBorder: true,
    elevation: 0,
    visible: true,
    drawBehind: false,
    background: {
      component: {
        name: 'com.myApp.Header',
      },
    },
  },
  statusBar: {
    translucent: true,
    drawBehind: false,
    backgroundColor: '#FCD',
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
