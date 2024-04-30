import {SafeAreaView} from 'react-native';

import {StoreProvider} from './src/redux';
import {SplashContainer} from './src/containers';

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <SafeAreaView>
        <SplashContainer />
      </SafeAreaView>
    </StoreProvider>
  );
}

export default App;
