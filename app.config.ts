import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'auth0-sso-test',
  slug: 'auth0-sso-test',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  assetBundlePatterns: ['**/*'],
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.joe.test"
  },
  android: {
    adaptiveIcon: {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    package: "com.joe.test"
  },
  plugins: [
    [
      'react-native-auth0',
      {
        clientId: process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID,
        domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN
      },
    ],
  ],
});

