import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';

interface GenreCardProps {
	title: string;
	color: string;
	selected: boolean;
	onSelect: () => void;
}

export function GenreCard({ title, color, selected, onSelect }: GenreCardProps) {
	return (
		<TouchableOpacity onPress={onSelect} className="m-2">
			<MotiView
				animate={{
					scale: selected ? 0.95 : 1,
				}}
				transition={{
					type: 'spring',
					damping: 15,
					mass: 0.6,
					stiffness: 150,
				}}
				style={{
					backgroundColor: color,
					width: 160,
					height: 80,
				}}
				className="rounded-lg relative overflow-hidden"
			>
				{/* Title */}
				<Text className="text-white text-2xl font-bold absolute top-3 left-4">{title}</Text>

				{/* Theater Mask Icon */}
				<Image
					source={require('../assets/face-mask.png')}
					style={{
						width: 32,
						height: 32,
						position: 'absolute',
						bottom: 8,
						right: 8,
						opacity: 0.9,
					}}
					resizeMode="contain"
				/>

				{/* Selection Indicator */}
				{selected && (
					<MotiView
						from={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							damping: 15,
							mass: 0.6,
						}}
						className="absolute top-2 right-2"
					>
						<Ionicons name="checkmark-circle" size={20} color="white" />
					</MotiView>
				)}
			</MotiView>
		</TouchableOpacity>
	);
}
