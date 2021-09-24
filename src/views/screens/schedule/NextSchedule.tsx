import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Container from '../../elements/Container';
import {theme} from '../../../shared/styles/theme';
import Row from '../../elements/Row';
import {DefaultNavigationProps} from '../../../route/type';
import ButtonText from '../../elements/button/ButtonText';
import useNextSchedule, {
  UseNextScheduleParams,
} from '../../../hooks/useNextSchedule';
import {ScheduleModel} from '../../../data/models/schedule.model';
import NextScheduleItem from './components/NextScheduleItem';

type NextScheduleProps = {
  navigation: DefaultNavigationProps<'default'>;
};
interface NextScheduleContentProps extends NextScheduleProps {
  schedules: ScheduleModel[];
}

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
            <NextScheduleItem schedule={item} navigation={navigation} />
          </View>
        )}
        horizontal={true}
      />
    </Container>
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
});
export default NextSchedule;
