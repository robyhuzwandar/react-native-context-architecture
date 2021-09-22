import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultNavigationProps, ParamList} from '../../../route/type';
import {containerPrimaryStyle} from '../../../shared/styles/styles';
import {theme} from '../../../shared/styles/theme';
import Column from '../../components/Column';
import Container from '../../components/Container';
import OpenMap from '../../components/OpenMap';
import Row from '../../components/Row';
import Time from './elements/Time';

export type ScheduleDetailsParams = {
  title: string;
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
      title: route.params?.title ?? '',
    });
  }, [navigation, route]);

  return (
    <Container style={S.container}>
      <Title title={'STORE'} />
      <Store />
      <Title title={'TIME SCHEDULE'} />
      <TimeSchedule />
      <Title title={'CLOCK IN'} />
      <ClockIn />
      <Title title={'CLOCK OUT'} />
      <ClockOut />
    </Container>
  );
};

const Title = ({title}: any) => (
  <Text style={[theme.textVariants.bodyBold.bb1, S.title]}>{title}</Text>
);

const Store = () => (
  <Row style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Image
      style={S.image}
      source={{
        uri: 'https://pbs.twimg.com/profile_images/1342791669846949888/tNZosV7q_400x400.jpg',
      }}
    />
    <Column style={S.descColumn}>
      <Text style={[theme.textVariants.bodyBold.bb1]}>
        Meditaria Garden Residence
      </Text>
      <Text numberOfLines={2} style={[theme.textVariants.body.b2, S.storeDesc]}>
        Main Lobby, Apartment Meditaria Garden Residence 1 (Bougen Ville
        Temanggung Jawa Barat)
      </Text>
      <OpenMap style={S.map} />
    </Column>
  </Row>
);

const TimeSchedule = () => (
  <View style={[containerPrimaryStyle.containerPrimary, S.card]}>
    <Time />
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
