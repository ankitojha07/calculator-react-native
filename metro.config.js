const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const baseConfig = getDefaultConfig(__dirname);

const customConfig = {
  /* your additional config */
};

const mergedConfig = mergeConfig(baseConfig, customConfig);

// Apply NativeWind configuration
module.exports = withNativeWind(mergedConfig, {input: './global.css'});
