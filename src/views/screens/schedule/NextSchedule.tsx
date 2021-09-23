import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';
import Row from '../../components/Row';
import Time from './elements/Time';
import {DefaultNavigationProps} from '../../../route/type';
import ButtonText from '../../components/button/ButtonText';
import useNextSchedule, {
  UseNextScheduleParams,
} from '../../../hooks/useNextSchedule';
import {ScheduleModel} from '../../../data/models/schedule.model';
import {getDateAndMont, getDay} from '../../../shared/utils/date';

type NextScheduleProps = {
  navigation: DefaultNavigationProps<'default'>;
};
type NextScheduleContentProps = {
  schedules: ScheduleModel[];
  navigation: DefaultNavigationProps<'default'>;
};
type CardScheduleProps = {
  schedule: ScheduleModel;
};

const NextSchedule: React.FC<NextScheduleProps> = ({navigation}) => {
  const {isLoading, isError, data}: UseNextScheduleParams = useNextSchedule();

  if (isLoading) {
    return <Text>Loading....</Text>;
  } else if (isError) {
    return <Text>Error</Text>;
  } else if (data) {
    return <NextScheduleContent schedules={data} navigation={navigation} />;
  } else {
    return <Text>Empty</Text>;
  }
};

const NextScheduleContent: React.FC<NextScheduleContentProps> = ({
  schedules,
  navigation,
}) => {
  return (
    <Container>
      <Row style={S.labelContainer}>
        <Text style={theme.textVariants.header.h4}>NEXT SCHEDULE</Text>
        <ButtonText
          onPress={() => navigation.navigate('AllSchedule')}
          label={'See all'}
          labelStyle={S.label}
        />
      </Row>
      <FlatList
        data={schedules.slice(0, 5)}
        renderItem={({item, index}: any) => (
          <View style={index === 0 ? {...S.firstCard} : {}}>
            <CardSchedule schedule={item} />
          </View>
        )}
        horizontal={true}
      />
    </Container>
  );
};

const CardSchedule: React.FC<CardScheduleProps> = ({schedule}) => {
  return (
    <View style={S.card}>
      <Text style={[theme.textVariants.body.b3, S.day]}>
        {getDay(schedule.timeStart)}
      </Text>
      <Text style={[theme.textVariants.header.h2, S.dateMonth]}>
        {getDateAndMont(schedule.timeStart)}
      </Text>
      <Text style={[theme.textVariants.bodyBold.bb2, S.location]}>
        {schedule.location}
      </Text>
      <Time start={schedule.timeStart} end={schedule.timeEnd} />
    </View>
  );
};

const S = StyleSheet.create({
  labelContainer: {
    justifyContent: 'space-between',
    marginVertical: theme.spacing.l,
    margin: theme.spacing.m,
  },
  label: {
    color: theme.colors.red,
  },

  firstCard: {
    marginLeft: theme.spacing.m,
  },
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
export default NextSchedule;
