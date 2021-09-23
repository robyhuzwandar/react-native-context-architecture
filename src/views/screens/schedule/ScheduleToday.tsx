import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';
import Row from '../../components/Row';
import Column from '../../components/Column';
import DashedLine from '../../components/DashLine';
import Time from './elements/Time';
import {containerPrimaryStyle} from '../../../shared/styles/styles';
import useScheduleToday from '../../../hooks/useScheduleToday';
import {ScheduleModel} from '../../../data/models/schedule.model';

type ScheduleTodayProps = {};
type ScheduleTodayBodyProps = {
  data: ScheduleModel;
};

const ScheduleToday: React.FC<ScheduleTodayProps> = () => {
  const {isLoading, isError, data} = useScheduleToday();

  if (isLoading) {
    return <Text>Loading....</Text>;
  } else if (isError) {
    return <Text>Error</Text>;
  } else if (data) {
    return <ScheduleTodayContent data={data} />;
  } else {
    return <Text>Empty</Text>;
  }
};

const ScheduleTodayContent: React.FC<ScheduleTodayBodyProps> = ({data}) => {
  return (
    <Container style={S.container}>
      <Row style={S.titleContainer}>
        <Text style={theme.textVariants.header.h4}>TODAY'S SCHEDULE</Text>
        <Text style={[theme.textVariants.body.b1, S.rightTitle]}>Refresh</Text>
      </Row>
      <View style={S.card}>
        <Text style={[theme.textVariants.bodyBold.bb2, S.title]}>
          {data.location}
        </Text>
        <Time start={data.timeStart} end={data.timeEnd} />
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
              style={[containerPrimaryStyle.containerError, S.clockLabelView]}>
              <Text style={[theme.textVariants.bodyBold.bb3, S.clockLabel]}>
                CLOCK IN
              </Text>
            </View>
            <Text style={theme.textVariants.bodyBold.bb2}>-- : --</Text>
          </Column>
        </Row>
      </View>
    </Container>
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
