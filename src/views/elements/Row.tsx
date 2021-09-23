import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

type RowProps = {
  style?: StyleProp<ViewStyle>;
};

const Row: React.FC<RowProps> = ({children, style}) => {
  return <View style={[S.container, style]}>{children}</View>;
};

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Row;
