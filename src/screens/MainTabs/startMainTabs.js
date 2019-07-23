import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//loading tabs

const startTabs = () => {
    //object to hold promises to resolve
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("md-share-alt", 30),
        Icon.getImageSource("md-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "dope-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0], 
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu", 
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "dope-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "dope-places.SideDrawer"
                }
            }
        });
    });
    
    

};

export default startTabs;