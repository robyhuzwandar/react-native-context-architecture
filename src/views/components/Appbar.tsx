import React from 'react';
import {Image, View, StyleSheet, Text, StatusBar} from 'react-native';
import {theme} from '../../shared/styles/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 70;

type AppBarProps = {
  title?: string;
};

const AppBar: React.FC<AppBarProps> = ({title}) => {
  return (
    <View style={S.container}>
      <View style={S.row}>
        <View style={S.imageContainer}>
          <Image
            style={S.image}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1342791669846949888/tNZosV7q_400x400.jpg',
            }}
          />
        </View>

        <Text style={[S.title, theme.textVariants.bodyBold.bb1]}>{title}</Text>
        <View style={S.rightHeader}>
          <Icon name={'notifications-outline'} size={theme.spacing.l} />
        </View>
      </View>
    </View>
  );
};

const S = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    height: STATUSBAR_HEIGHT + 30,
    backgroundColor: theme.colors.yellow,
    padding: theme.spacing.s,
    justifyContent: 'flex-end',
    width: theme.spacing.widthScreen,
  },
  image: {height: 40, width: 40, borderRadius: 50},
  imageContainer: {
    flex: 1,
  },
  title: {
    width: theme.spacing.widthScreen / 3.5,
    flex: 3,
    textAlign: 'center',
    marginHorizontal: theme.spacing.m,
  },
  rightHeader: {flex: 1, alignItems: 'flex-end'},
});
export default AppBar;
