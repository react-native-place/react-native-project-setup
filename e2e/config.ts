import path from 'path';

const runTestOn: 'android' | 'ios' = 'android';

const capabilities = {
  android: {
    platformName: 'Android',
    'appium:deviceName': 'Pixel_8_Pro_API_34',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.reactnativebasicproject',
    'appium:appActivity': '.MainActivity',
    'appium:appName': 'ReactNativeBasicProject',
    'appium:app': path.join(
      __dirname,
      '/../android/app/build/outputs/apk/release/app-release.apk',
    ),
  },
  ios: {
    platformName: 'ios',
    'appium:udid': '',
    'appium:automationName': 'XCuiTest',
    'appium:appPackage': 'com.reactnativebasicproject',
    'appium:appName': 'ReactNativeBasicProject',
  },
};

const capability = capabilities[runTestOn];

export {capabilities, capability, runTestOn};
