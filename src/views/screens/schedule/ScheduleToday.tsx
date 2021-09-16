import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';

type ScheduleTodayProps = {};

const ScheduleToday: React.FC<ScheduleTodayProps> = () => {
  return (
    <Container style={S.container}>
      <View style={S.labelContainer}>
        <Text style={theme.textVariants.header.h4}>TODAY'S SCHEDULE</Text>
        <Text style={[theme.textVariants.body.b1, S.label]}>Refresh</Text>
      </View>
      <View style={S.card}>
        <Text style={theme.textVariants.bodyBold.bb2}>
          Mediterania Garden Reseidence
        </Text>
        <Text style={theme.textVariants.body.b2}>08:00 - 17:00</Text>
      </View>
    </Container>
  );
};

const S = StyleSheet.create({
  container: {
    margin: theme.spacing.m,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.l,
  },
  label: {
    color: theme.colors.red,
  },
  card: {
    backgroundColor: theme.colors.silver,
    padding: theme.spacing.m,
    borderRadius: theme.spacing.s,
  },
});
export default ScheduleToday;
