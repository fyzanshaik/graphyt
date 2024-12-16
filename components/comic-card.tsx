import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface ComicCardProps {
	title: string;
	image: any;
	size: 'small' | 'medium' | 'large';
}

export function ComicCard({ title, image, size }: ComicCardProps) {
	const dimensions = {
		small: 'w-32 h-48',
		medium: 'w-40 h-56',
		large: 'w-48 h-64',
	};

	return (
		<Animated.View entering={FadeIn.duration(1000).springify()} className="mr-4">
			<Pressable>
				<Image source={image} className={`${dimensions[size]} rounded-xl`} resizeMode="cover" />
				<Text className="text-white mt-2 font-['Poppins-Medium']" numberOfLines={1}>
					{title}
				</Text>
			</Pressable>
		</Animated.View>
	);
}
