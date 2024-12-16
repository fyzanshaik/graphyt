import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import '../global.css';

export default function RootLayout() {
	// Load any fonts if needed
	const [fontsLoaded] = useFonts({
		// Add your custom fonts here if needed
		// 'CustomFont-Regular': require('../assets/fonts/CustomFont-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(onboarding)/index" options={{ headerShown: false, animation: 'slide_from_right' }} />
			<Stack.Screen name="(onboarding)/genre" options={{ headerShown: false, animation: 'slide_from_right' }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
}
