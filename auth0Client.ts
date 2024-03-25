import Auth0 from 'react-native-auth0'

export const AUTH0_DOMAIN = process.env.EXPO_PUBLIC_AUTH0_DOMAIN
export const AUTH0_CLIENT_ID = process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID

const auth0Client = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
})

export { auth0Client }
