import React, {useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DefaultNavigationProps} from '../../../route/type';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';
import AppBar from '../../components/Appbar';

type HomeProps = {
  navigation: DefaultNavigationProps<'default'>;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: 'LIVE ATTENDANCE',
  //     headerTitleStyle: [theme.textVariants.bodyBold.bb2],
  //     headerTransparent: true,
  //     headerStyle: {
  //       backgroundColor: theme.colors.yellow,
  //       shadowColor: 'transparent',
  //       shadowOpacity: 0,
  //       borderBottomWidth: 0,
  //       elevation: 0,
  //     },
  //     cardStyle: {
  //       shadowColor: 'transparent',
  //       shadowOpacity: 0,
  //       borderBottomWidth: 0,
  //       elevation: 0,
  //     },
  //     headerLeft: () => (
  //       <Image
  //         style={S.imageLeftHeader}
  //         source={{
  //           uri: 'https://pbs.twimg.com/profile_images/1342791669846949888/tNZosV7q_400x400.jpg',
  //         }}
  //       />
  //     ),
  //   });
  // }, [navigation]);
  return (
    <Container>
      <AppBar title={'LIVE ATTENDENCE'} />
      {/* <View
        style={{backgroundColor: theme.colors.yellow, height: 100, width: 500}}
      /> */}
      <Text>HOME SCREEN</Text>
    </Container>
  );
};

const S = StyleSheet.create({
  imageLeftHeader: {
    height: theme.spacing.xl,
    width: theme.spacing.xl,
    borderRadius: 50,
  },
});
export default Home;
