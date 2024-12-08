import React, { useState } from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';

interface InputProps {
	label: string;
	value: string;
	onChangeText: (text: string) => void;
	secureTextEntry?: boolean;
	error?: string;
	keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export function Input({ label, value, onChangeText, secureTextEntry, error, keyboardType = 'default', autoCapitalize = 'none' }: InputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const isActive = isFocused || value.length > 0;

	return (
		<View className="mb-6">
			{' '}
			{/* Increased bottom margin for more space between inputs */}
			<MotiView
				animate={{
					translateY: isActive ? -35 : 0, // Increased translateY for higher positioning
					translateX: isActive ? -15 : 0, // Added slight left movement when active
					scale: isActive ? 1 : 1,
				}}
				transition={{
					type: 'spring',
					damping: 15, // Reduced from 20
					mass: 0.6, // Reduced from 0.8
					stiffness: 300, // Added for snappier animation
				}}
				className="absolute left-5 top-[20px] z-10"
			>
				<Text
					className={`
                ${isActive ? 'text-purple-400 text-sm ' : 'text-gray-400 text-base'} 
                tracking-wide
              `}
				>
					{label}
				</Text>
			</MotiView>
			<MotiView
				animate={{
					borderColor: error ? '#ef4444' : isFocused ? '#a855f7' : '#1f2937',
				}}
				className="relative mt-2"
			>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					secureTextEntry={secureTextEntry && !showPassword}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					keyboardType={keyboardType}
					autoCapitalize={autoCapitalize}
					placeholder="" // Add empty placeholder to improve focus performance
					keyboardAppearance="dark" // Faster keyboard appearance on iOS
					className={`
                bg-gray-900/50 backdrop-blur-lg
                border border-gray-800
                rounded-lg px-4 py-4
                text-white text-base
                ${error ? 'border-red-500' : ''}
                ${secureTextEntry ? 'pr-12' : 'pr-4'}
              `}
					placeholderTextColor="#666"
				/>

				{secureTextEntry && value.length > 0 && (
					<Pressable onPress={() => setShowPassword(!showPassword)} className="absolute right-4 top-4">
						<Ionicons name={showPassword ? 'eye-off' : 'eye'} size={18} color="#a855f7" />
					</Pressable>
				)}
			</MotiView>
			{error && (
				<MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'timing', duration: 200 }}>
					<Text className="text-red-400 text-xs mt-1 ml-1">{error}</Text>
				</MotiView>
			)}
		</View>
	);
}
