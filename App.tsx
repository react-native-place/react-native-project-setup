import 'react-native-gesture-handler';

import {StoreProvider} from './src/redux';
import {RootNavigation} from './src/navigation';

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <RootNavigation />
    </StoreProvider>
  );
}

export default App;
