import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {ScheduleModel} from '../../../../data/models/schedule.model';
import {DefaultNavigationProps} from '../../../../route/type';
import {theme} from '../../../../shared/styles/theme';
import {getDay, getDateAndMonth} from '../../../../shared/utils/date';
import Time from './Time';

type NextScheduleItemProps = {
  schedule: ScheduleModel;
  navigation: DefaultNavigationProps<'default'>;
};

const NextScheduleItem: React.FC<NextScheduleItemProps> = ({
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
      <View style={S.card}>
        <Text style={[theme.textVariants.body.b3, S.day]}>
          {getDay(schedule.timeStart)}
        </Text>
        <Text style={[theme.textVariants.header.h2, S.dateMonth]}>
          {getDateAndMonth(schedule.timeStart)}
        </Text>
        <Text style={[theme.textVariants.bodyBold.bb2, S.location]}>
          {schedule.location}
        </Text>
        <Time start={schedule.timeStart} end={schedule.timeEnd} />
      </View>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.silver,
    paddingVertical: theme.spacing.m,
    paddingLeft: theme.spacing.m,
    paddingRight: theme.spacing.xxxl,
    borderRadius: theme.spacing.s,
    marginRight: theme.spacing.m,
    width: theme.spacing.widthScreen * 0.7,
  },
  day: {
    color: theme.colors.grey,
  },
  dateMonth: {
    marginTop: theme.spacing.xxs,
    marginBottom: theme.spacing.xxl,
  },
  location: {
    marginBottom: theme.spacing.xxs,
  },
});

export default NextScheduleItem;
