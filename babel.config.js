module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@styles': './src/styles',
          '@images': './src/assets/images',
          '@icons': './src/assets/icons',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@views': './src/views',
          '@utils': './src/utils',
          '@app': './src',
        },
        root: ['./'],
      },
      'react-native-reanimated/plugin',
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
