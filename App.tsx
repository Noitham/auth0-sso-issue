import {StyleSheet, View} from 'react-native';
import {Auth0Provider} from "react-native-auth0";
import {AUTH0_CLIENT_ID, AUTH0_DOMAIN} from "./auth0Client";
import Home from "./app/Home";


export default function App() {


  return (
    <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
      <View style={styles.container}>
        <Home/>
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
