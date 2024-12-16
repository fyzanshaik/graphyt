import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface VoiceActorCardProps {
	name: string;
	image: any;
}

export function VoiceActorCard({ name, image }: VoiceActorCardProps) {
	return (
		<Animated.View entering={FadeIn.duration(1000).springify()} className="mr-6 items-center">
			<Pressable>
				<Image source={image} className="w-16 h-16 rounded-full" resizeMode="cover" />
				<Text className="text-white text-center mt-2 text-xs font-['Poppins-Medium']" numberOfLines={1}>
					{name}
				</Text>
			</Pressable>
		</Animated.View>
	);
}
