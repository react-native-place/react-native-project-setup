import {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {SplashScreen} from '../screens';
import {RootNavigationParamList} from '../types';

type SplashContainerProps = StackScreenProps<RootNavigationParamList, 'Splash'>;

function SplashContainer(props: SplashContainerProps) {
  useEffect(() => {
    setTimeout(() => {
      props?.navigation.navigate('Login');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SplashScreen />;
}

export {SplashContainer};
