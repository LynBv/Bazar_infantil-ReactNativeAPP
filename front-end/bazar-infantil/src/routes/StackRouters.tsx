import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { TabRouters } from './BottonTabs';
import Feed from '../screens/Feed';

const Stack = createNativeStackNavigator();

export const StackRouters = () => {

  return (
    <Stack.Navigator initialRouteName="StackFeed" >
      <Stack.Screen name="StackLogin" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="StackFeed" component={TabRouters} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}