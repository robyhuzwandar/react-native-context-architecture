import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {containerPrimaryStyle} from '../../../../shared/styles/styles';
import Column from '../../../components/Column';
import Row from '../../../components/Row';
import Time from './Time';
import {theme} from '../../../../shared/styles/theme';
import DashContainer from '../../../components/DashContainer';
import {DefaultNavigationProps} from '../../../../route/type';

type AllScheduleItemItemProps = {
  isScheduleEmpty: Boolean;
  isToday: Boolean;
  navigation: DefaultNavigationProps<'default'>;
};
type CardContentProps = {isToday: Boolean};

const AllScheduleItemItem: React.FC<AllScheduleItemItemProps> = ({
  isScheduleEmpty,
  isToday,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ScheduleDetails', {
          title: '7 APRIL 2021',
        })
      }>
      <Row style={S.container}>
        <MonthDate />
        {isScheduleEmpty ? (
          <DashContainer style={S.dashContainer}>
            <Text style={theme.textVariants.bodyBold.bb2}>NO SCHEDULE</Text>
          </DashContainer>
        ) : (
          <CardContent isToday={isToday} />
        )}
      </Row>
    </TouchableOpacity>
  );
};

const MonthDate = () => (
  <Column style={S.monthAndDate}>
    <Text style={S.month}>MON</Text>
    <Text style={theme.textVariants.header.h3}>5</Text>
  </Column>
);

const CardContent = ({isToday}: CardContentProps) => (
  <View style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Text style={[theme.textVariants.bodyBold.bb2, S.title]}>
      Meditaria Garden Residence
    </Text>
    <Row>
      <Time />
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
export default AllScheduleItemItem;
