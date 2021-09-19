import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type ColumnProps = {
  style?: StyleProp<ViewStyle>;
};

const Column: React.FC<ColumnProps> = ({children, style}) => {
  return <View style={[S.container, style]}>{children}</View>;
};

const S = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
export default Column;
