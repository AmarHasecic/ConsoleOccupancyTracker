import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen name="index"
      options={{ title: 'Konzole' }}
      />
      <Stack.Screen name="reciept"
      options={{ title: 'Račun' }}
      />
  </Stack>
  );
};
