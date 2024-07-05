import 'react-native-gesture-handler';
import './src/localization/i18n';

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
