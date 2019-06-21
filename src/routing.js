
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Menu from './pages/Menu/index';
import Notification from './pages/Notification/index';

import { Navigation } from 'react-native-navigation';

Navigation.registerComponent(`Login`, () => Login);
Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Notification`, () => Notification);
Navigation.registerComponent(`Menu`, () => Menu);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  }
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
        stack: {
            children: [{
                component: {
                    name: "Login"
                }
            }]
        }
    }
  });
});

