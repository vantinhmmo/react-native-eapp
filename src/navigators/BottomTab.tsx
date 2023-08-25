
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Comic, Store } from '../screens';
import { useTheme } from '../hooks';
// import { ApplicationStackParamList } from '../../@types/navigation';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 70,
        paddingTop: 10,
        paddingBottom: 5,
    },
    icon: {
        width: 30,
        height: 30,
    },
    tabBarLabelStyle: {
        fontSize: 16
    }
});



function BottomTab() {
    const { Images } = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Store"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1fd2ea',
                tabBarInactiveTintColor: 'white',
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle
            }}
        >
            <Tab.Screen
                name="Store"
                component={Store}
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: ({ color }) => <Image
                        source={Images.bottomTabIcon.storeIcon}
                        style={[styles.icon, { tintColor: color }]}
                    />
                }}
            />
            <Tab.Screen
                name="Collections"
                component={Comic}
                options={{
                    tabBarLabel: 'Collections',
                    tabBarIcon: ({ color }) => <Image
                        source={Images.bottomTabIcon.collectionIcon}
                        style={[styles.icon, { tintColor: color }]}
                    />
                }}
            />
            <Tab.Screen
                name="Feed"
                component={Comic}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color }) => <Image
                        source={Images.bottomTabIcon.feedIcon}
                        style={[styles.icon, { tintColor: color }]}
                    />
                }}
            />
            <Tab.Screen
                name="Market"
                component={Comic}
                options={{
                    tabBarLabel: 'Market',
                    tabBarIcon: ({ color }) => <Image
                        source={Images.bottomTabIcon.marketIcon}
                        style={[styles.icon, { tintColor: color }]}
                    />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Comic}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => <Image
                        source={Images.bottomTabIcon.profileIcon}
                        style={[styles.icon, { tintColor: color }]}
                    />
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTab