import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePostScreen from "../screens/CriarPostagem";
import { Text, View } from "react-native";
import IconM from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./style";
import { Login } from "../screens/Login";
import Exemplo from "../screens/Exemplo";

const Tab = createBottomTabNavigator();

export const TabRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        title: "",headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="TabsFeed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <IconM
                name="home"
                size={focused ? 30 : size}
                color={focused ? "#88d8b0" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabsCriarPostagem"
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <IconM
                name="plus-box"
                size={focused ? 30 : size}
                color={focused ? "#88d8b0" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabsCarrinho"
        component={Exemplo}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <IconM
                name="cart"
                size={focused ? 30 : size}
                color={focused ? "#88d8b0" : "gray"}
              />
            </View>
          ),
        }}
      />
    
    </Tab.Navigator>
    
  );
};
