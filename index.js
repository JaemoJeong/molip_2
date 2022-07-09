import {AppRegistry} from 'react-native'
import app from './ServerExample'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => app);