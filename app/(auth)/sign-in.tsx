import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { MotiView } from 'moti';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function SignInScreen() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSignIn = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<MotiView from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 200 }} className="flex-1 bg-black px-6 pt-12">
			<View className="flex-1 justify-center">
				<View className="mb-12">
					<Text className="text-6xl font-bold text-white mb-3 tracking-tight">
						Graphyt<Text className="text-purple-500">.</Text>
					</Text>
					<Text className="text-2xl text-gray-400">Welcome back</Text>
				</View>

				<View className="space-y-5">
					<Input label="Phone number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
					<Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />

					<TouchableOpacity className="self-end mb-2">
						<Text className="text-purple-400 text-sm mt-2 mb-2">Forgot Password?</Text>
					</TouchableOpacity>

					<Button onPress={handleSignIn} loading={loading}>
						Sign in
					</Button>
				</View>

				<Text className="text-gray-500 text-sm text-center mt-8">
					By signing in, you agree to the <Text className="text-purple-400">Terms of Use</Text> and <Text className="text-purple-400">Privacy Notice</Text>
				</Text>
			</View>

			{/* Sign Up Section */}
			<View className="flex-row items-center justify-center pb-8">
				<Text className="text-gray-400 text-base">New to Graphyt?</Text>
				<Link href="/(auth)/sign-up" asChild>
					<Pressable className="ml-2">
						<Text className="text-purple-400 text-lg font-bold">Create account</Text>
					</Pressable>
				</Link>
			</View>
		</MotiView>
	);
}
