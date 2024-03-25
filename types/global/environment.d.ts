declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_AUTH0_DOMAIN: string;
      EXPO_PUBLIC_AUTH0_CLIENT_ID: string;
    }
  }
}

export {};
