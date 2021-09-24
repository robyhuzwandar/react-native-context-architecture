import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {containerPrimaryStyle} from '../../../../shared/styles/styles';
import Column from '../../../elements/Column';
import Row from '../../../elements/Row';
import Time from './Time';
import {theme} from '../../../../shared/styles/theme';
import DashContainer from '../../../elements/DashContainer';
import {DefaultNavigationProps} from '../../../../route/type';
import {ScheduleOfMonthModel} from '../../../../data/models/scheduleOfMonth.model';

interface AllScheduleItemProps extends CardContentProps {
  isScheduleEmpty: Boolean;
  navigation: DefaultNavigationProps<'default'>;
}
interface CardContentProps extends MonthDate {
  isToday: Boolean;
}

type MonthDate = {
  scheduleOfMonth: ScheduleOfMonthModel;
};
const AllScheduleItem: React.FC<AllScheduleItemProps> = ({
  isScheduleEmpty,
  isToday,
  navigation,
  scheduleOfMonth,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        if (!isScheduleEmpty) {
          navigation.navigate('ScheduleDetails', {
            schedule: scheduleOfMonth.schedule!,
          });
        }
      }}>
      <Row style={S.container}>
        <MonthDate scheduleOfMonth={scheduleOfMonth} />
        {isScheduleEmpty ? (
          <DashContainer style={S.dashContainer}>
            <Text style={theme.textVariants.bodyBold.bb2}>NO SCHEDULE</Text>
          </DashContainer>
        ) : (
          <CardContent isToday={isToday} scheduleOfMonth={scheduleOfMonth} />
        )}
      </Row>
    </TouchableOpacity>
  );
};

const MonthDate = ({scheduleOfMonth}: MonthDate) => (
  <Column style={S.monthAndDate}>
    <Text style={S.month}>{scheduleOfMonth.month}</Text>
    <Text style={theme.textVariants.header.h3}>{scheduleOfMonth.date}</Text>
  </Column>
);

const CardContent = ({isToday, scheduleOfMonth}: CardContentProps) => (
  <View style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Text style={[theme.textVariants.bodyBold.bb2, S.title]}>
      {scheduleOfMonth.schedule?.location}
    </Text>
    <Row>
      <Time
        start={scheduleOfMonth.schedule!.timeStart}
        end={scheduleOfMonth.schedule!.timeEnd}
      />
      {isToday && (
        <View style={[containerPrimaryStyle.containerError, S.todayContainer]}>
          <Text style={[theme.textVariants.bodyBold.bb3, S.todayLabel]}>
            TODAY
          </Text>
        </View>
      )}
    </Row>
  </View>
);

const S = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.m,
    alignItems: 'flex-start',
  },
  monthAndDate: {
    alignItems: 'center',
    marginRight: theme.spacing.m,
  },
  month: {
    color: theme.colors.grey,
    marginBottom: theme.spacing.xs,
  },
  card: {
    padding: theme.spacing.s,
    flex: 1,
    borderRadius: theme.spacing.xs,
  },
  title: {
    marginBottom: theme.spacing.xs,
  },
  dashContainer: {
    padding: theme.spacing.l,
    flex: 1,
    alignItems: 'center',
  },
  todayContainer: {
    padding: theme.spacing.xxs,
    marginLeft: theme.spacing.s,
  },
  todayLabel: {
    color: theme.colors.white,
  },
});
export default AllScheduleItem;
