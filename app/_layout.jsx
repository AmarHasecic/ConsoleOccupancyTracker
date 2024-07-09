import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ff4500',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen name="index"
      options={{ title: 'Konzole' }}
      />

      <Stack.Screen name="reciept_regular"
      options={{ title: 'Račun' }}>
      </Stack.Screen>

      <Stack.Screen name="reciept_happy"
      options={{ title: 'Račun' }}>
      </Stack.Screen>

  </Stack>
  );
};
