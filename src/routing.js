
import Splash from './pages/Splash/index';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Group from './pages/Group/index';
import MarketPlace from './pages/MarketPlace/index';
import Profile from './pages/Profile/index';
import Menu from './pages/Menu/index';
import Notification from './pages/Notification/index';
import EditStatus from './pages/Home/EditStatus';

import { Navigation } from 'react-native-navigation';

Navigation.registerComponent(`Splash`, () => Splash);
Navigation.registerComponent(`Login`, () => Login);
Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`Group`, () => Group);
Navigation.registerComponent(`MarketPlace`, () => MarketPlace);
Navigation.registerComponent(`Profile`, () => Profile);
Navigation.registerComponent(`Notification`, () => Notification);
Navigation.registerComponent(`Menu`, () => Menu);
Navigation.registerComponent(`EditStatus`, () => EditStatus);

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
                    name: "Splash"
                }
            }]
        }
    }
  });
});

