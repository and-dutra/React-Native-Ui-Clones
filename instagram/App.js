import React from "react";
import { Icon } from "native-base";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import MainScreen from "./Components/MainScreen";
import SearchTab from "./Components/SearchTab";
import LikesTab from "./Components/LikesTab";
import ProfilesTab from "./Components/ProfilesTab";
import AddMediaTab from "./Components/AddMediaTab";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const MainScreenTab = createStackNavigator({
  Main: MainScreen
});
const SearchScreenTab = createStackNavigator({
  Search: SearchTab
});
const AddMediaScreenTab = createStackNavigator({
  Media: AddMediaTab
});
const LikesScreenTab = createStackNavigator({
  Likes: LikesTab
});
const ProfileScreenTab = createStackNavigator({
  Profile: ProfilesTab
});

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Main: MainScreenTab,
      Search: SearchScreenTab,
      Adicionar: AddMediaScreenTab,
      Likes: LikesScreenTab,
      Profile: ProfileScreenTab
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Main") {
            iconName = `ios-home`;
          } else if (routeName === "Search") {
            iconName = `ios-search`;
          } else if (routeName === "Likes") {
            iconName = `ios-heart`;
          } else if (routeName === "Profile") {
            iconName = `ios-person`;
          } else {
            iconName = "ios-add-circle";
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return (
            <Icon name={iconName} style={{ color: tintColor, fontSize: 20 }} />
          );
        }
      }),
      swipeEnabled: true,
      animationEnabled: true,
      tabBarPosition: "bottom",
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    }
  )
);
