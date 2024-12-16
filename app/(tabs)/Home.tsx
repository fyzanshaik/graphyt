import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, Image, Pressable, FlatList, RefreshControl } from 'react-native';
import Animated, { FadeInDown, FadeIn, SlideInRight, ZoomIn, SlideInUp } from 'react-native-reanimated';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { popularComics, voiceActors, trendingComics, newComics } from '../data/data';
import { SkeletonLoader } from '@/components/skeleton-loader';
import { SectionHeader } from '@/components/section-header';
import { ComicCard } from '@/components/comic-card';
import { ContinueReadingCard } from '@/components/continue-reading-card';
import { GenreTag } from '@/components/genre-tag';
import { VoiceActorCard } from '@/components/voice-actor-card';

// ... other imports

// SplashScreen.preventAutoHideAsync();

const continueReadingImages = [require('../../assets/c-r/1.png'), require('../../assets/c-r/2.png'), require('../../assets/c-r/3.png'), require('../../assets/c-r/4.png')];

const promoImage = require('../../assets/pro/1.png');

const HomeScreen = () => {
	const [refreshing, setRefreshing] = useState(false);

	const [fontsLoaded] = useFonts({
		'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
		'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
		'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
		'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
	});

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		// Add your refresh logic here
		setRefreshing(false);
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) return <SkeletonLoader />;

	return (
		<ScrollView
			className="flex-1 bg-black"
			onLayout={onLayoutRootView}
			showsVerticalScrollIndicator={false}
			refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#ffffff" />}
		>
			<Animated.View entering={FadeInDown.duration(300)}>
				{/* Continue Reading Section */}
				<Animated.View entering={SlideInRight.duration(300)} className="mt-4">
					<SectionHeader title="Continue Reading" />
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
						{continueReadingImages.map((image, index) => (
							<Animated.View key={index} entering={ZoomIn.duration(300)}>
								<ContinueReadingCard title={['Batgirl', 'Aquaman', 'Black Adam', 'Batman'][index]} image={image} progress={[0.7, 0.3, 0.5, 0.2][index]} />
							</Animated.View>
						))}
					</ScrollView>
				</Animated.View>

				{/* Promotions Section */}
				<Animated.View entering={FadeIn.duration(300)} className="mt-8 px-4">
					<SectionHeader title="Promotions (ad)" />
					<Pressable className="rounded-xl overflow-hidden">
						<Image source={promoImage} className="w-full h-48 rounded-xl" resizeMode="cover" />
					</Pressable>
				</Animated.View>

				{/* New to Comics Section */}
				<Animated.View entering={SlideInUp.duration(300)} className="mt-8">
					<SectionHeader title="New to Comics" showAll />
					<FlatList
						horizontal
						data={newComics}
						showsHorizontalScrollIndicator={false}
						className="px-4"
						renderItem={({ item }) => <ComicCard title={item.title} image={item.image} size="medium" />}
					/>
				</Animated.View>

				{/* Trending Now Section */}
				<View className="mt-8">
					<SectionHeader title="Trending Now" showAll />
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
						{trendingComics.map((comic, index) => (
							<Pressable key={comic.id} className="w-[170px] h-[170px] rounded-xl overflow-hidden relative mr-4">
								<Image source={comic.image} className="w-full h-full" resizeMode="contain" />
								<View className="absolute left-2 top-2 w-8 h-8 bg-yellow-400 rounded-full items-center justify-center">
									<Text className="font-bold text-black">{index + 1}</Text>
								</View>
							</Pressable>
						))}
					</ScrollView>
				</View>

				{/* Voice Actors Section */}
				<View className="mt-8">
					<SectionHeader title="Voice Actors" showAll />
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
						{voiceActors.map((actor) => (
							<VoiceActorCard key={actor.id} name={actor.name} image={actor.image} />
						))}
					</ScrollView>
				</View>

				{/* Genre Section */}
				<View className="mt-8">
					<SectionHeader title="Explore more Genre" showAll />
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
						<GenreTag title="Romance" color="#FFD7BA" />
						<GenreTag title="Comedy" color="#FFB4B4" />
						<GenreTag title="Action" color="#B9E6C9" />
						<GenreTag title="Sci-fi" color="#FFFF8F" />
					</ScrollView>
				</View>

				{/* Popular Comics Section */}
				<View className="mt-8 mb-8">
					<SectionHeader title="Popular Comics" showAll />
					<FlatList
						horizontal
						data={popularComics}
						showsHorizontalScrollIndicator={false}
						className="px-4"
						renderItem={({ item }) => <ComicCard title={item.title} image={item.image} size="large" />}
					/>
				</View>
			</Animated.View>
		</ScrollView>
	);
};

export default HomeScreen;

// import React, { useCallback } from 'react';
// // import { View, Text } from 'react-native';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// // SplashScreen.preventAutoHideAsync();

// const HomeScreen = () => {
// 	const [fontsLoaded] = useFonts({
// 		'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
// 	});

// 	const onLayoutRootView = useCallback(async () => {
// 		if (fontsLoaded) {
// 			await SplashScreen.hideAsync();
// 		}
// 	}, [fontsLoaded]);

// 	if (!fontsLoaded) {
// 		return null;
// 	}

// 	return (
// 		<View>
// 			<Text>Hello World</Text>
// 		</View>
// 	);
// };

// export default HomeScreen;
