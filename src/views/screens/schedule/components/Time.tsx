import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../../../shared/styles/theme';
import {timeFormat} from '../../../../shared/utils/date';
import Row from '../../../elements/Row';

type TimeProps = {
  start: Date;
  end: Date;
};

const Time: React.FC<TimeProps> = ({start, end}) => {
  return (
    <Row>
      <Icon name={'clock-time-four-outline'} size={theme.spacing.l} />
      <Text style={[S.time, theme.textVariants.body.b2]}>
        {timeFormat(start)} - {timeFormat(end)}
      </Text>
    </Row>
  );
};

const S = StyleSheet.create({
  time: {
    marginLeft: theme.spacing.xs,
  },
});
export default Time;
