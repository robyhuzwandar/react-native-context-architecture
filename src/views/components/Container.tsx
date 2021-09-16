import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

type ContainerProps = {
  hideAppBar?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Container: React.FC<ContainerProps> = ({children, style}) => {
  return <View style={[S.container, style]}>{children}</View>;
};

const S = StyleSheet.create({
  container: {},
});
export default Container;
