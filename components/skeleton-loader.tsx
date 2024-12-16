// import React from 'react';
// import { View, Dimensions } from 'react-native';
// import Animated, { useAnimatedStyle, withRepeat, withSequence, withTiming, useSharedValue, withDelay, withSpring, SlideInRight, FadeIn } from 'react-native-reanimated';

// const { width } = Dimensions.get('window');

// export function SkeletonLoader() {
// 	const opacity = useSharedValue(0.3);
// 	const translateX = useSharedValue(-20);
// 	const scale = useSharedValue(0.95);

// 	React.useEffect(() => {
// 		opacity.value = withRepeat(withSequence(withTiming(1, { duration: 1000 }), withTiming(0.3, { duration: 1000 })), -1, true);

// 		translateX.value = withRepeat(withSequence(withSpring(0), withDelay(1000, withSpring(-20))), -1, true);

// 		scale.value = withRepeat(withSequence(withSpring(1), withDelay(1000, withSpring(0.95))), -1, true);
// 	}, []);

// 	const animatedStyle = useAnimatedStyle(() => ({
// 		opacity: opacity.value,
// 	}));

// 	const slideStyle = useAnimatedStyle(() => ({
// 		transform: [{ translateX: translateX.value }, { scale: scale.value }],
// 	}));

// 	const getDelayedStyle = (delay: number) =>
// 		useAnimatedStyle(() => ({
// 			opacity: withDelay(delay, opacity.value),
// 			transform: [{ scale: withDelay(delay, scale.value) }],
// 		}));

// 	return (
// 		<View className="flex-1 bg-black p-4">
// 			{/* Header Section */}
// 			<Animated.View entering={FadeIn.duration(600)} style={slideStyle}>
// 				<Animated.View className="h-4 bg-gray-800 rounded-full w-1/2 mb-6" style={animatedStyle} />
// 			</Animated.View>

// 			{/* Continue Reading Section */}
// 			<View className="mb-8">
// 				<Animated.View className="h-3 bg-gray-800 rounded-full w-36 mb-4" style={getDelayedStyle(200)} />
// 				<View className="flex-row">
// 					{[1, 2, 3, 4].map((i) => (
// 						<Animated.View key={i} entering={SlideInRight.delay(i * 100)} className="w-28 h-36 rounded-xl bg-gray-800 mr-4" style={getDelayedStyle(i * 150)} />
// 					))}
// 				</View>
// 			</View>

// 			{/* Promotions Section */}
// 			<Animated.View className="h-3 bg-gray-800 rounded-full w-32 mb-4" style={getDelayedStyle(600)} />
// 			<Animated.View className="h-48 bg-gray-800 rounded-xl mb-8" style={getDelayedStyle(700)} />

// 			{/* New Comics Section */}
// 			<View className="mb-8">
// 				<Animated.View className="h-3 bg-gray-800 rounded-full w-40 mb-4" style={getDelayedStyle(800)} />
// 				<View className="flex-row">
// 					{[1, 2, 3].map((i) => (
// 						<Animated.View key={i} className="w-32 h-44 rounded-xl bg-gray-800 mr-4" style={getDelayedStyle(800 + i * 100)} />
// 					))}
// 				</View>
// 			</View>

// 			{/* Trending Section */}
// 			<View className="mb-8">
// 				<Animated.View className="h-3 bg-gray-800 rounded-full w-36 mb-4" style={getDelayedStyle(1100)} />
// 				<View className="flex-row justify-between">
// 					{[1, 2].map((i) => (
// 						<Animated.View key={i} className="w-[170px] h-[170px] rounded-xl bg-gray-800" style={getDelayedStyle(1100 + i * 100)} />
// 					))}
// 				</View>
// 			</View>

// 			{/* Voice Actors Section */}
// 			<View className="mb-8">
// 				<Animated.View className="h-3 bg-gray-800 rounded-full w-32 mb-4" style={getDelayedStyle(1400)} />
// 				<View className="flex-row">
// 					{[1, 2, 3, 4].map((i) => (
// 						<Animated.View key={i} className="w-16 h-16 rounded-full bg-gray-800 mr-4" style={getDelayedStyle(1400 + i * 100)} />
// 					))}
// 				</View>
// 			</View>

// 			{/* Genres Section */}
// 			<View className="mb-8">
// 				<Animated.View className="h-3 bg-gray-800 rounded-full w-44 mb-4" style={getDelayedStyle(1700)} />
// 				<View className="flex-row">
// 					{[1, 2, 3, 4].map((i) => (
// 						<Animated.View key={i} className="w-24 h-8 rounded-full bg-gray-800 mr-4" style={getDelayedStyle(1700 + i * 100)} />
// 					))}
// 				</View>
// 			</View>
// 		</View>
// 	);
// }

import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, withRepeat, withSequence, withTiming, useSharedValue, withDelay } from 'react-native-reanimated';
export function SkeletonLoader() {
	const opacity = useSharedValue(0.3);
	React.useEffect(() => {
		opacity.value = withRepeat(withSequence(withTiming(1, { duration: 1000 }), withTiming(0.3, { duration: 1000 })), -1, true);
	}, []);
	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
	}));
	return (
		<View className="flex-1 bg-black p-4">
			<Animated.View className="h-4 bg-gray-800 rounded-full w-1/2 mb-4" style={animatedStyle} />
			<View className="flex-row mb-8">
				{[1, 2, 3, 4].map((i) => (
					<Animated.View key={i} className="w-16 h-16 rounded-full bg-gray-800 mr-4" style={animatedStyle} />
				))}
			</View>
		</View>
	);
}
