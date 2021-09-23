import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../../shared/styles/theme';

type OpenMapProps = {
  style?: StyleProp<ViewStyle>;
};

const OpenMap: React.FC<OpenMapProps> = ({style}) => {
  return (
    <View style={[S.container, style]}>
      <Text style={S.text}>View Map</Text>
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    borderColor: theme.colors.red,
    padding: theme.spacing.xxs,
    borderWidth: 1,
    borderRadius: theme.spacing.m,
    width: 90,
    alignItems: 'center',
  },
  text: {
    color: theme.colors.red,
  },
});
export default OpenMap;
