import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {theme} from '../../shared/styles/theme';

type DashContainerProps = {
  style?: StyleProp<ViewStyle>;
};

const DashContainer: React.FC<DashContainerProps> = ({children, style}) => {
  return <View style={[S.container, style]}>{children}</View>;
};

const S = StyleSheet.create({
  container: {
    borderWidth: theme.spacing.xxxs,
    borderStyle: 'dashed',
    borderColor: theme.colors.silver,
    borderRadius: theme.spacing.xxxs,
  },
});
export default DashContainer;
