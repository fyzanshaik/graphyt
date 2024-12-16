import React from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants/tab-icons';

type TabIconProps = {
	focused: boolean;
	name: string;
	color: string;
	icon: any;
};

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
	return (
		<View className="items-center justify-center w-[72px] h-[70px] top-5 ">
			<View className="w-8 h-8 items-center justify-center">
				<Image source={icon} className="w-[22.4px] h-[24px]" style={{ tintColor: color }} resizeMode="contain" />
			</View>
			<Text
				className={` ${focused ? 'font-semibold' : 'text-[10px]'}    font-bold leading-[14px] mt-2`}
				style={{
					color,
					fontFamily: 'Open Sans',
					letterSpacing: -0.0012,
				}}
			>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout: React.FC = () => {
	return (
		<>
			<StatusBar style="light" />
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: '#FFFFFF',
					tabBarInactiveTintColor: '#FFFFFF',
					tabBarStyle: {
						backgroundColor: '#000000',
						borderTopWidth: 0,
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						height: 75,
						width: '100%',
						paddingHorizontal: 0,
						paddingTop: 0,
						margin: 0,
						justifyContent: 'space-between',
					},
					headerShown: false,
				}}
			>
				<Tabs.Screen
					name="Home"
					options={{
						title: 'Home',
						tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />,
					}}
				/>
				<Tabs.Screen
					name="Search"
					options={{
						title: 'Search',
						tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.search} color={color} name="Search" focused={focused} />,
					}}
				/>
				<Tabs.Screen
					name="Library"
					options={{
						title: 'Library',
						tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.library} color={color} name="Library" focused={focused} />,
					}}
				/>
				<Tabs.Screen
					name="VoiceComic"
					options={{
						title: 'Voice Comic',
						tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.voiceComic} color={color} name="Voice Comic" focused={focused} />,
					}}
				/>
				<Tabs.Screen
					name="Profile"
					options={{
						title: 'Profile',
						tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />,
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;
