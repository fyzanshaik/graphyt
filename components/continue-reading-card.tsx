import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface ContinueReadingCardProps {
	title: string;
	image: any;
	progress: number;
}

export function ContinueReadingCard({ title, image, progress }: ContinueReadingCardProps) {
	return (
		<Animated.View entering={FadeIn.duration(1000).springify()} className="mr-4 items-center">
			<Pressable>
				<View className="relative">
					<Image source={image} className="w-16 h-16 rounded-full" resizeMode="cover" />
					<View
						className="absolute inset-0 rounded-full"
						style={{
							borderWidth: 2,
							borderColor: '#FFD700',
							borderRadius: 999,
						}}
					/>
					<View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
				</View>
				<Text className="text-white text-center mt-2 text-xs font-['Poppins-Medium']" numberOfLines={1}>
					{title}
				</Text>
			</Pressable>
		</Animated.View>
	);
}
