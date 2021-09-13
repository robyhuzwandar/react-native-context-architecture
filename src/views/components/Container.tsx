import React from 'react';
import {StyleSheet, View} from 'react-native';

type ContainerProps = {
  hideAppBar?: boolean;
};

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <View>
      <View style={S.container}>{children}</View>
    </View>
  );
};

const S = StyleSheet.create({
  container: {},
});
export default Container;
