import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import MainStack from './navigations/mainStack';
import IndexPage from './pages/index';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import AddListPage from './pages/addList';

const App = ({}) => {
    const Stack = createStackNavigator();
    const navigationRef = React.useRef(null);

    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name='IndexPage' component={IndexPage} options={{headerShown: false}}/>
                <Stack.Screen name='SignInPage' component={SignInPage} options={{headerShown: false}}/>
                <Stack.Screen name='SignUpPage' component={SignUpPage} options={{headerShown: true}}/>
                <Stack.Screen name='MainStack' component={MainStack} options={{headerShown: false}}/>
                <Stack.Screen name='AddListPage' component={AddListPage} options={{headerShown: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;