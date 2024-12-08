import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import { MotiView } from 'moti';
import type { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	loading?: boolean;
	disabled?: boolean;
}

export const Button = forwardRef<View, ButtonProps>((props, ref) => {
	const { onPress, children, variant = 'primary', loading, disabled, ...rest } = props;

	return (
		<TouchableOpacity ref={ref} onPress={onPress} disabled={loading || disabled} className="w-full" {...rest}>
			<MotiView
				animate={{
					scale: loading || disabled ? 0.98 : 1,
					opacity: disabled ? 0.7 : 1,
				}}
				transition={{
					type: 'timing',
					duration: 100, // Reduced from default
				}}
				className={`
          py-4 px-6 rounded-xl
          ${variant === 'primary' ? 'bg-purple-500' : 'bg-gray-900/50 border border-gray-800'}
        `}
			>
				{loading ? (
					<ActivityIndicator color="white" />
				) : (
					<Text
						className={`
              text-center font-bold text-lg
              ${variant === 'primary' ? 'text-white' : 'text-gray-300'}
            `}
					>
						{children}
					</Text>
				)}
			</MotiView>
		</TouchableOpacity>
	);
});

Button.displayName = 'Button';
