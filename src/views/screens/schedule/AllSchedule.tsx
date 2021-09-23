import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {DefaultNavigationProps} from '../../../route/type';
import AllScheduleItem from './components/AllScheduleItem';
import {theme} from '../../../shared/styles/theme';
import ButtonIcon from '../../elements/button/ButtonIcon';
import useAllSchedule, {
  UseAllScheduleParams,
} from '../../../hooks/useAllSchedule';

type AllScheduleProps = {
  navigation: DefaultNavigationProps<'default'>;
};

const AllSchedule: React.FC<AllScheduleProps> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'UPCOMING SCHEDULE',
      headerRight: () => (
        <ButtonIcon onPress={() => {}} iconName={'refresh-cw'} />
      ),
    });
  }, [navigation]);

  const {isLoading, isError, scheduleThisMonth}: UseAllScheduleParams =
    useAllSchedule();

  if (isLoading) {
    return <Text>Loading....</Text>;
  } else if (isError) {
    return <Text>Error</Text>;
  } else if (scheduleThisMonth) {
    return (
      <View style={S.container}>
        <Text style={[theme.textVariants.header.h4, S.month]}>SEP 2021</Text>
        <FlatList
          data={scheduleThisMonth}
          renderItem={({item}: any) => {
            let isScheduleEmpty: Boolean = item?.schedule === undefined;
            let isToday: Boolean = +item.date === new Date().getDate();
            return (
              <AllScheduleItem
                isScheduleEmpty={isScheduleEmpty}
                isToday={isToday}
                navigation={navigation}
                scheduleOfMonth={item}
              />
            );
          }}
        />
      </View>
    );
  } else {
    return <Text>Empty</Text>;
  }
};

const S = StyleSheet.create({
  container: {
    margin: theme.spacing.m,
    paddingBottom: theme.spacing.xxxl,
  },
  month: {
    marginBottom: theme.spacing.m,
  },
});
export default AllSchedule;
