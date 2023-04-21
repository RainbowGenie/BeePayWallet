module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          constants: './src/constants',
          contexts: './src/contexts',
          hooks: './src/hooks',
          main: './src/main',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          stores: './src/stores',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
  ],
};
