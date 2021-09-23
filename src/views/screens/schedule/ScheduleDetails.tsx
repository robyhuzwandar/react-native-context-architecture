import {RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultNavigationProps, ParamList} from '../../../route/type';
import {containerPrimaryStyle} from '../../../shared/styles/styles';
import {theme} from '../../../shared/styles/theme';
import Column from '../../elements/Column';
import Container from '../../elements/Container';
import OpenMap from '../../elements/OpenMap';
import Row from '../../elements/Row';
import Time from './components/Time';
import {dateFormat} from '../../../shared/utils/date';
import {ScheduleModel} from '../../../data/models/schedule.model';

export type ScheduleDetailsParams = {
  schedule: ScheduleModel;
};

type ContentProps = {
  schedule: ScheduleModel;
};

type ScheduleDetailsProps = {
  navigation: DefaultNavigationProps<'default'>;
  route: RouteProp<ParamList<ScheduleDetailsParams>, any>;
};

const ScheduleDetails: React.FC<ScheduleDetailsProps> = ({
  navigation,
  route,
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: dateFormat(route.params?.schedule.timeStart) ?? '',
    });
  }, [navigation, route]);

  const [schedule, setSchedule] = useState<ScheduleModel>();

  useEffect(() => {
    setSchedule(route.params?.schedule);
  }, [route.params?.schedule]);

  if (schedule) {
    return (
      <Container style={S.container}>
        <Title title={'STORE'} />
        <Store schedule={schedule!} />
        <Title title={'TIME SCHEDULE'} />
        <TimeSchedule schedule={schedule!} />
        <Title title={'CLOCK IN'} />
        <ClockIn />
        <Title title={'CLOCK OUT'} />
        <ClockOut />
      </Container>
    );
  }

  return <View />;
};

const Title = ({title}: any) => (
  <Text style={[theme.textVariants.bodyBold.bb1, S.title]}>{title}</Text>
);

const Store: React.FC<ContentProps> = ({schedule}) => (
  <Row style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Image
      style={S.image}
      source={{
        uri: schedule.image,
      }}
    />
    <Column style={S.descColumn}>
      <Text style={[theme.textVariants.bodyBold.bb1]}>{schedule.location}</Text>
      <Text numberOfLines={2} style={[theme.textVariants.body.b2, S.storeDesc]}>
        {schedule.description}
      </Text>
      <OpenMap style={S.map} />
    </Column>
  </Row>
);

const TimeSchedule: React.FC<ContentProps> = ({schedule}) => (
  <View style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Time start={schedule.timeStart} end={schedule.timeEnd} />
  </View>
);

const ClockIn = () => (
  <View style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Row>
      <Icon name={'qrcode-scan'} size={theme.spacing.xxl} />
      <Text style={S.clock}>--:--</Text>
    </Row>
  </View>
);

const ClockOut = () => (
  <View style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Row>
      <Icon name={'qrcode-scan'} size={theme.spacing.xxl} />
      <Text style={S.clock}>--:--</Text>
    </Row>
  </View>
);

const S = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.m,
    paddingBottom: theme.spacing.xxxl,
  },
  title: {
    marginBottom: theme.spacing.s,
    marginTop: theme.spacing.xl,
  },
  card: {
    padding: theme.spacing.m,
    paddingRight: theme.spacing.xxl,
    borderRadius: theme.spacing.xs,
    alignItems: 'flex-start',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: theme.spacing.xs,
    marginRight: theme.spacing.m,
  },
  descColumn: {flex: 1},
  storeDesc: {
    color: theme.colors.grey,
    marginTop: theme.spacing.xs,
    flex: 1,
  },
  clock: {
    marginLeft: theme.spacing.l,
    fontSize: theme.spacing.m,
  },
  map: {
    marginTop: theme.spacing.m,
  },
});
export default ScheduleDetails;
