import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';
import AppBar from '../../components/Appbar';
import ScheduleToday from '../schedule/ScheduleToday';
import NextSchedule from '../schedule/NextSchedule';
import Row from '../../components/Row';
import ButtonPrimary from '../../components/button/ButtonPrimary';
import {DefaultNavigationProps} from '../../../route/type';
import {dateFormat, timeFormat} from '../../../shared/utils/date';

type HomeProps = {
  navigation: DefaultNavigationProps<'default'>;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <Container>
      <AppBar title={'LIVE ATTENDENCE'} />
      <View style={S.header}>
        <Text style={[theme.textVariants.header.h1, S.time]}>
          {timeFormat(new Date())}
        </Text>
        <Text style={theme.textVariants.bodyBold.bb2}>
          {dateFormat(new Date())}
        </Text>
      </View>
      <ScheduleToday />
      <NextSchedule navigation={navigation} />
      <Row style={S.buttonRow}>
        <ButtonPrimary
          style={S.btnClockIn}
          label={'Clock In'}
          onPress={() => {}}
        />
        <ButtonPrimary
          style={S.btnClockOut}
          label={'Clock Out'}
          onPress={() => {}}
        />
      </Row>
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
  buttonRow: {
    marginHorizontal: theme.spacing.m,
    marginVertical: theme.spacing.xxxl,
  },
  btnClockIn: {
    flex: 1,
  },
  btnClockOut: {
    backgroundColor: theme.colors.grey,
    flex: 1,
    marginLeft: theme.spacing.m,
  },
});
export default Home;
