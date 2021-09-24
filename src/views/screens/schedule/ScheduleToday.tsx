import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../elements/Container';
import {theme} from '../../../shared/styles/theme';
import Row from '../../elements/Row';
import Column from '../../elements/Column';
import DashedLine from '../../elements/DashLine';
import Time from './components/Time';
import {containerPrimaryStyle} from '../../../shared/styles/styles';
import useScheduleToday, {
  UseScheduleToday,
} from '../../../hooks/useScheduleToday';
import {ScheduleModel} from '../../../data/models/schedule.model';
import {DefaultNavigationProps} from '../../../route/type';

type ScheduleTodayProps = {
  navigation: DefaultNavigationProps<'default'>;
};
type ScheduleTodayBodyProps = {
  schedule: ScheduleModel;
  navigation: DefaultNavigationProps<'default'>;
};

const ScheduleToday: React.FC<ScheduleTodayProps> = ({navigation}) => {
  const {isLoading, isError, data}: UseScheduleToday = useScheduleToday();

  if (isLoading) {
    return <Text>Loading....</Text>;
  } else if (isError) {
    return <Text>Error</Text>;
  } else if (data) {
    return <ScheduleTodayContent schedule={data} navigation={navigation} />;
  } else {
    return <Text>Empty</Text>;
  }
};

const ScheduleTodayContent: React.FC<ScheduleTodayBodyProps> = ({
  schedule,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ScheduleDetails', {
          schedule: schedule!,
        });
      }}>
      <Container style={S.container}>
        <Row style={S.titleContainer}>
          <Text style={theme.textVariants.header.h4}>TODAY'S SCHEDULE</Text>
          <Text style={[theme.textVariants.body.b1, S.rightTitle]}>
            Refresh
          </Text>
        </Row>
        <View style={S.card}>
          <Text style={[theme.textVariants.bodyBold.bb2, S.title]}>
            {schedule.location}
          </Text>
          <Time start={schedule.timeStart} end={schedule.timeEnd} />
          <Row style={S.row}>
            <Column style={S.column}>
              <View
                style={[
                  containerPrimaryStyle.containerSuccess,
                  S.clockLabelView,
                ]}>
                <Text style={[theme.textVariants.bodyBold.bb3, S.clockLabel]}>
                  CLOCK IN
                </Text>
              </View>
              <Text style={theme.textVariants.bodyBold.bb2}>-- : --</Text>
            </Column>
            <View style={S.dash}>
              <DashedLine
                dashColor={theme.colors.grey}
                dashLength={theme.spacing.xs}
                dashThickness={1}
                dashGap={theme.spacing.xs}
              />
            </View>
            <Column style={S.column}>
              <View
                style={[
                  containerPrimaryStyle.containerError,
                  S.clockLabelView,
                ]}>
                <Text style={[theme.textVariants.bodyBold.bb3, S.clockLabel]}>
                  CLOCK IN
                </Text>
              </View>
              <Text style={theme.textVariants.bodyBold.bb2}>-- : --</Text>
            </Column>
          </Row>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  container: {
    margin: theme.spacing.m,
  },
  title: {
    marginBottom: theme.spacing.xs,
  },
  titleContainer: {
    justifyContent: 'space-between',
    marginVertical: theme.spacing.l,
  },
  rightTitle: {
    color: theme.colors.red,
  },
  dash: {
    flex: 1,
    marginBottom: 5,
    marginHorizontal: theme.spacing.s,
    alignSelf: 'flex-end',
  },
  column: {
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginTop: theme.spacing.m,
  },
  clockLabelView: {
    padding: theme.spacing.xxs,
    marginBottom: theme.spacing.xs,
  },
  clockLabel: {
    color: theme.colors.white,
  },
  card: {
    backgroundColor: theme.colors.silver,
    padding: theme.spacing.m,
    borderRadius: theme.spacing.s,
  },
});
export default ScheduleToday;
