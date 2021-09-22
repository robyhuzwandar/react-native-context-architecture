import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Container from '../../components/Container';
import {theme} from '../../../shared/styles/theme';
import Row from '../../components/Row';
import Time from './elements/Time';
import {DefaultNavigationProps} from '../../../route/type';
import ButtonText from '../../components/button/ButtonText';

type NextScheduleProps = {
  navigation: DefaultNavigationProps<'default'>;
};

const NextSchedule: React.FC<NextScheduleProps> = ({navigation}) => {
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
        data={[1, 2, 3, 4, 5]}
        renderItem={({_, index}: any) => (
          <View style={index === 0 ? {...S.firstCard} : {}}>
            <CardItem />
          </View>
        )}
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
      <Text style={[theme.textVariants.bodyBold.bb2, S.location]}>
        Mediterania Garden Reseidence
      </Text>
      <Time />
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
