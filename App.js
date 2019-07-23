import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";


import configureStore from './src/store/configureStore';

//getting store to pass to provider
const store = configureStore();

//register screens
//must register components before loading in react native navigation 
//store and pro for redux 
Navigation.registerComponent(
    "dope-places.AuthScreen",
    () => AuthScreen,
    store,
    Provider
);
//generator function to return screens
Navigation.registerComponent(
    "dope-places.SharePlaceScreen",
    () => SharePlaceScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "dope-places.FindPlaceScreen",
    () => FindPlaceScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "dope-places.PlaceDetailScreen",
    () => PlaceDetailScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "dope-places.SideDrawer", 
    () => SideDrawer
);

//Start the app
Navigation.startSingleScreenApp({
    screen: {
        screen: "dope-places.AuthScreen",
        title: "Login"
    }
});