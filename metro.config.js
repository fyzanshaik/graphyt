const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add asset extensions
config.resolver.assetExts.push('png', 'jpg', 'jpeg');

module.exports = withNativeWind(config, { input: './global.css' });
