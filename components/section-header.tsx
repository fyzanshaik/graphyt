import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface SectionHeaderProps {
	title: string;
	showAll?: boolean;
}

export function SectionHeader({ title, showAll }: SectionHeaderProps) {
	return (
		<View className="flex-row justify-between items-center px-4 mb-4 py-2">
			<Text className="text-white text-xl font-['Poppins-Bold']">{title}</Text>
			{showAll && (
				<Pressable className="flex-row items-center">
					<Text className="text-gray-400 mr-1 font-['Poppins-Medium']">See all</Text>
					<ChevronRight size={16} color="#9CA3AF" />
				</Pressable>
			)}
		</View>
	);
}
