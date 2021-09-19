import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';
import Row from '../../components/Row';

type NextScheduleProps = {};

const NextSchedule: React.FC<NextScheduleProps> = () => {
  return (
    <Container style={S.container}>
      <Row style={S.labelContainer}>
        <Text style={theme.textVariants.header.h4}>NEXT SCHEDULE</Text>
        <Text style={[theme.textVariants.body.b1, S.label]}>See all</Text>
      </Row>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <CardItem />}
        horizontal={true}
      />
    </Container>
  );
};

type CardItemProps = {};

const CardItem: React.FC<CardItemProps> = () => {
  return (
    <View style={S.card}>
      <Text style={[theme.textVariants.body.b3, S.day]}>WEDNESDAY</Text>
      <Text style={[theme.textVariants.header.h2, S.dateMonth]}>7 Apr</Text>
      <Text style={theme.textVariants.bodyBold.bb2}>
        Mediterania Garden Reseidence
      </Text>
      <Text style={theme.textVariants.body.b2}>08:00 - 17:00</Text>
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    margin: theme.spacing.m,
  },
  labelContainer: {
    justifyContent: 'space-between',
    marginVertical: theme.spacing.l,
  },
  label: {
    color: theme.colors.red,
  },
  card: {
    backgroundColor: theme.colors.silver,
    paddingVertical: theme.spacing.m,
    paddingLeft: theme.spacing.m,
    paddingRight: theme.spacing.xxxl,
    borderRadius: theme.spacing.s,
    marginRight: theme.spacing.s,
  },
  day: {
    color: theme.colors.grey,
  },
  dateMonth: {
    marginTop: theme.spacing.xxs,
    marginBottom: theme.spacing.xxl,
  },
});
export default NextSchedule;
