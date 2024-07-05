import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import {translations} from '../constants';

function LoginScreen() {
  const {t, i18n} = useTranslation();

  function onPressLogin() {
    Alert.alert('Loggedin successfully!');
  }
  return (
    <SafeAreaView style={styles?.container}>
      <View style={styles?.content}>
        <Text style={styles?.title}>{t('screens.login.title')}</Text>
        <TextInput
          testID="textinput.username"
          accessible
          accessibilityLabel="textinput.username"
          placeholder={t('screens.login.input.username.placeholder')}
        />
        <TextInput
          testID="textinput.password"
          accessible
          accessibilityLabel="textinput.password"
          placeholder={t('screens.login.input.password.placeholder')}
        />
        <Button
          testID="button.login"
          accessibilityLabel="button.login"
          title={t('screens.login.button.login')}
          onPress={onPressLogin}
        />

        <Button
          testID="button.changeLanguage.tamil"
          accessibilityLabel="button.changeLanguage.tamil"
          title={'தமிழுக்கு மாறுங்கள்'}
          onPress={() => {
            i18n.changeLanguage(translations?.tamil);
          }}
        />
        <Button
          testID="button.changeLanguage.english"
          accessibilityLabel="button.changeLanguage.english"
          title={'Change to English'}
          onPress={() => {
            i18n.changeLanguage(translations?.english);
          }}
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
