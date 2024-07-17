import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009999',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {  
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen name="index"
      options={{ title: 'Konzole' }}
      />

      <Stack.Screen name="receipt"
      options={{ title: 'Račun' }}>
      </Stack.Screen>
  
  </Stack>
  );
};
