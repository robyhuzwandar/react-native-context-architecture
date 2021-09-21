import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../../shared/styles/theme';
import Row from '../../../components/Row';

type TimeProps = {};

const Time: React.FC<TimeProps> = () => {
  return (
    <Row>
      <Icon name={'clock-time-four-outline'} size={theme.spacing.l} />
      <Text style={[S.time, theme.textVariants.body.b2]}>08:00 - 17:00</Text>
    </Row>
  );
};

const S = StyleSheet.create({
  time: {
    marginLeft: theme.spacing.xs,
  },
});
export default Time;
