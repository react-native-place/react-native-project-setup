import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function SplashScreen() {
  return (
    <SafeAreaView style={styles?.container}>
      <View style={styles?.content}>
        <Text>Splash Screen</Text>
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
  },
});

export {SplashScreen};
