
import { Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import collectionIcon = require('../theme/assets/images/collection.png')
import { Example } from '../screens';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});


function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: 'white'
            }}
        >
            <Tab.Screen
                name="Collections"
                component={Example}
                options={{
                    tabBarLabel: 'Collections',
                    tabBarIcon: ({ color }) => <Image
                        source={collectionIcon}
                        style={[styles.icon, { tintColor: color }]}
                    />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Example}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => <Image
                        source={collectionIcon}
                        style={[styles.icon, { tintColor: color }]}
                    />
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTab