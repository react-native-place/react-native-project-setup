import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';

function LoginScreen() {
  function onPressLogin() {
    Alert.alert('Loggedin successfully!');
  }
  return (
    <SafeAreaView style={styles?.container}>
      <View style={styles?.content}>
        <Text style={styles?.title}>Login Screen</Text>
        <TextInput
          testID="textinput.username"
          accessible
          accessibilityLabel="textinput.username"
          placeholder="Username"
        />
        <TextInput
          testID="textinput.password"
          accessible
          accessibilityLabel="textinput.password"
          placeholder="Password"
        />
        <Button
          testID="button.login"
          accessibilityLabel="button.login"
          title="Login"
          onPress={onPressLogin}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    rowGap: 10,
  },
  title: {
    fontSize: 21,
  },
});

export {LoginScreen};
