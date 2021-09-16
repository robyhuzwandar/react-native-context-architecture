import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DefaultNavigationProps} from '../../../route/type';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';
import AppBar from '../../components/Appbar';
import ScheduleToday from '../schedule/ScheduleToday';
import NextSchedule from '../schedule/NextSchedule';

type HomeProps = {
  navigation: DefaultNavigationProps<'default'>;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <Container>
      <AppBar title={'LIVE ATTENDENCE'} />
      <View style={S.header}>
        <Text style={[theme.textVariants.header.h1, S.time]}>07:30</Text>
        <Text style={theme.textVariants.bodyBold.bb2}>Monday, 5 Apr 2021</Text>
      </View>
      <ScheduleToday />
      <NextSchedule />
    </Container>
  );
};

const S = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.yellow,
    height: 200,
    width: theme.spacing.widthScreen,
    borderBottomRightRadius: theme.spacing.xl,
    borderBottomLeftRadius: theme.spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 70,
  },
  date: {},
});
export default Home;
