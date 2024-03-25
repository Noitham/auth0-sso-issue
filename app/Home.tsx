import {Button, Text, View} from "react-native";
import {useState} from "react";
import {Credentials, useAuth0} from "react-native-auth0";

const SCOPE = 'openid profile email offline_access phone'
const AUDIENCE = 'http://localhost:8000/'

const Home = () => {

  const {authorize, user, getCredentials, clearCredentials, clearSession} = useAuth0()

  const [credentials, setCredentials] = useState<Credentials | undefined>(undefined);


  const onLogin = async () => {
    await authorize({ scope: SCOPE, audience: AUDIENCE})
    const credentials = await getCredentials()
    setCredentials(credentials)
  }

  const onLoginSMS = async () => {
    await authorize({ connection:'sms', scope: SCOPE, audience: AUDIENCE})
    const credentials = await getCredentials()
    setCredentials(credentials)
  }

  const onLoginSilently = async () => {
   await authorize({connection:'sms', scope: SCOPE, audience: AUDIENCE, additionalParameters: {prompt: 'none'}})
    const credentials = await getCredentials()
    setCredentials(credentials)
  }

  const onLogout = async () => {
    await clearCredentials()
    await clearSession()
    const credentials = await getCredentials()
    setCredentials(credentials)
  }


  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <View style={{ padding: 10}}>
        <Text>{`User: ${user?.name}`}</Text>
        <Text>{`Credentials: ${credentials?.accessToken}`}</Text>
        <Button title={"Login"} onPress={onLogin} />
        <Button title={"Login (SMS)"} onPress={onLoginSMS} />
        <Button title={"Silent login"} onPress={onLoginSilently} />
        <Button title={"Logout"} onPress={onLogout} />
      </View>
    </View>
  )
}

export default Home
