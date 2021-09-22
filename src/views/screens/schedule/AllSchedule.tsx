import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {DefaultNavigationProps} from '../../../route/type';
import AllScheduleItemItem from './elements/AllScheduleItem';
import {theme} from '../../../shared/styles/theme';
import ButtonIcon from '../../components/button/ButtonIcon';

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

  return (
    <View style={S.container}>
      <Text style={[theme.textVariants.header.h4, S.month]}>SEP 2021</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item}: any) => (
          <AllScheduleItemItem
            isScheduleEmpty={item === 2 || item === 6}
            isToday={item === 1}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
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
