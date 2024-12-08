import { Input } from '@/components/ui/Input';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View, Pressable, Text } from 'react-native';
import { MotiView } from 'moti';
import { Button } from '../../components/ui/Button';

export default function CreateAccountScreen() {
	const [username, setUsername] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleCreateAccount = () => {
		setLoading(true);
		router.push('/(onboarding)/genre');
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1" keyboardVerticalOffset={0} enabled>
			<ScrollView className="flex-1 bg-black" contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="always" keyboardDismissMode="on-drag" showsVerticalScrollIndicator={false}>
				<MotiView from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 200 }} className="flex-1 px-6 pt-12">
					<View className="flex-1 justify-center">
						{/* Header Section */}
						<View className="mb-12">
							<Text className="text-6xl font-bold text-white mb-3 tracking-tight">
								Graphyt<Text className="text-purple-500">.</Text>
							</Text>
							<Text className="text-2xl text-gray-400">Create your account</Text>
						</View>

						{/* Form Section */}
						<View className="space-y-5">
							<Input label="Username" value={username} onChangeText={setUsername} autoCapitalize="none" />
							<Input label="Phone number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
							<Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
							<View>
								<Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
								{password.length > 0 && <Text className="text-gray-500 text-xs mt-2 ml-1">Must be 8+ characters with number and uppercase</Text>}
							</View>

							<View className="pt-4">
								<Button onPress={handleCreateAccount} loading={loading}>
									Create account
								</Button>
							</View>
						</View>

						<Text className="text-gray-500 text-sm text-center mt-8">
							By creating an account, you agree to the <Text className="text-purple-400">Terms of Use</Text> and <Text className="text-purple-400">Privacy Notice</Text>
						</Text>
					</View>

					{/* Sign In Section */}
					<View className="flex-row items-center justify-center pb-8">
						<Text className="text-gray-400 text-base">Already have an account?</Text>
						<Link href="/(auth)/sign-in" asChild>
							<Pressable className="ml-2">
								<Text className="text-purple-400 text-lg font-bold">Sign in</Text>
							</Pressable>
						</Link>
					</View>
				</MotiView>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
