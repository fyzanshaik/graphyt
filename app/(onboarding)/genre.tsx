import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { MotiView } from 'moti';
import { GenreCard } from '../../components/genre-card';
import { Button } from '../../components/ui/Button';
import { StatusBar } from 'expo-status-bar';

const GENRES = [
	{ id: 1, title: 'Drama', color: '#E74C3C' },
	{ id: 2, title: 'Fantasy', color: '#CC8E35' },
	{ id: 3, title: 'Comedy', color: '#9B59B6' },
	{ id: 4, title: 'Action', color: '#D4AC0D' },
	{ id: 5, title: 'Romance', color: '#2ECC71' },
	{ id: 6, title: 'SuperHero', color: '#95A5A6' },
	{ id: 7, title: 'Thriller', color: '#935116' },
	{ id: 8, title: 'Super Natural', color: '#D81B60' },
];

export default function GenreSelectionScreen() {
	const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

	const toggleGenre = (id: number) => {
		setSelectedGenres((prev) => (prev.includes(id) ? prev.filter((genreId) => genreId !== id) : [...prev, id]));
	};

	const handleNext = () => {
		if (selectedGenres.length > 0) {
			router.push('/');
		}
	};

	return (
		<View className="flex-1 bg-black">
			<StatusBar style="light" />
			<MotiView from={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }} transition={{ type: 'timing', duration: 200 }} className="flex-1">
				{/* Header */}
				<Text className="text-3xl font-bold text-white px-4 mt-12 mb-6">What genre do you like?</Text>

				{/* Genre Grid */}
				<ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
					<View className="flex-row flex-wrap justify-between">
						{GENRES.map((genre) => (
							<GenreCard key={genre.id} title={genre.title} color={genre.color} selected={selectedGenres.includes(genre.id)} onSelect={() => toggleGenre(genre.id)} />
						))}
					</View>
				</ScrollView>

				{/* Bottom Buttons */}
				<View className="px-4 pb-8 mt-auto">
					<Button variant="secondary" onPress={() => router.push('/')} className="mb-4">
						Skip
					</Button>
					<Button onPress={handleNext} disabled={selectedGenres.length === 0} className="bg-purple-500">
						Next
					</Button>
				</View>
			</MotiView>
		</View>
	);
}
