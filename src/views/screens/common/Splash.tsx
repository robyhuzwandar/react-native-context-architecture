import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {DefaultNavigationProps} from '../../../route/type';

type SplashProps = {
  navigation: DefaultNavigationProps<'default'>;
};

const Splash: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    }, 1000);
  }, [navigation]);

  return (
    <View>
      <Text>SPLASH SCREEN</Text>
    </View>
  );
};
export default Splash;
