import React from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

type ContainerProps = {
  hideAppBar?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Container: React.FC<ContainerProps> = ({children, style}) => {
  return <ScrollView style={[S.container, style]}>{children}</ScrollView>;
};

const S = StyleSheet.create({
  container: {},
});
export default Container;
