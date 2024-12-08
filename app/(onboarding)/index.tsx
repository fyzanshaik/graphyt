import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useState, useRef, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';

interface OnboardingItem {
	title: string;
	description: string;
	image: any;
}

const ONBOARDING_DATA: OnboardingItem[] = [
	{
		title: 'Experience Storytelling',
		description: 'Experience the magic of storytelling like never before with our comic e-book platform, where vibrant visuals meet captivating voice-acting.',
		image: require('../../assets/onboard/spiderman.png'),
	},
	{
		title: 'Voice Narration',
		description: 'Discover a new dimension of entertainment that blends the joy of reading with the excitement of voice narration, creating an immersive comic adventure just for you.',
		image: require('../../assets/onboard/guy.png'),
	},
	{
		title: 'Explore Comics',
		description: 'Immerse Yourself in the World of Voice-Enhanced Comics',
		image: require('../../assets/onboard/cave.png'),
	},
];

export default function OnboardingScreen() {
	const [activeSlide, setActiveSlide] = useState(0);
	const { width } = Dimensions.get('window');
	const carouselRef = useRef<ICarouselInstance>(null);

	const renderItem = useCallback(
		({ item }: { item: OnboardingItem }) => (
			<View className="flex-1 items-start justify-center px-6 mt-28">
				<View className="w-full aspect-square overflow-hidden rounded-3xl mb-8">
					<Image source={item.image} className="w-full h-full" resizeMode="cover" />
				</View>
				<View>
					<Text className="text-white self-start text-3xl font-bold mb-4 mt-10">{item.title}</Text>
					<Text className="text-white/80 text-base">{item.description}</Text>
				</View>
			</View>
		),
		[]
	);

	const handleNext = () => {
		if (activeSlide === ONBOARDING_DATA.length - 1) {
			router.push('/(auth)/sign-in');
		} else {
			const nextIndex = activeSlide + 1;
			setActiveSlide(nextIndex);
			carouselRef.current?.scrollTo({ index: nextIndex, animated: true });
		}
	};

	return (
		<View className="flex-1 bg-black">
			<StatusBar style="light" translucent backgroundColor="transparent" />

			<Carousel ref={carouselRef} loop={false} width={width} height={width * 1.6} data={ONBOARDING_DATA} renderItem={renderItem} onSnapToItem={setActiveSlide} />

			<View className="flex-row justify-center">
				{ONBOARDING_DATA.map((_, index) => (
					<View key={`dot-${index}`} className={`h-4 w-4 rounded-full mx-2 ${index === activeSlide ? 'bg-white' : 'bg-white/30'}`} />
				))}
			</View>

			<View className="px-3 mt-8 mb-12">
				<TouchableOpacity className={`py-4 items-center rounded-lg ${activeSlide === ONBOARDING_DATA.length - 1 ? 'bg-purple-500' : 'bg-white'}`} onPress={handleNext}>
					<Text className={`font-bold text-2xl ${activeSlide === ONBOARDING_DATA.length - 1 ? 'text-white' : 'text-black'}`}>
						{activeSlide === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Next'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
