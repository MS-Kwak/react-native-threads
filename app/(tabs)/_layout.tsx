import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name="home"
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name="search"
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate('/modal');
          },
        }}
        options={{
          title: 'Add',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name="add"
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name="heart-outline"
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="[username]"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name="person-outline"
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
