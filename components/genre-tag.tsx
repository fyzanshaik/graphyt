import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface GenreTagProps {
	title: string;
	color: string;
}

export function GenreTag({ title, color }: GenreTagProps) {
	return (
		<Animated.View entering={FadeIn.duration(1000).springify()}>
			<Pressable className="px-6 py-2 rounded-full mr-3" style={{ backgroundColor: color }}>
				<Text className="font-['Poppins-SemiBold'] text-black">{title}</Text>
			</Pressable>
		</Animated.View>
	);
}
