import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from 'react-native';
import {theme} from '../../../shared/styles/theme';

type ButtonTextProps = {
  onPress: () => void;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
};

const ButtonText: React.FC<ButtonTextProps> = ({
  label,
  onPress,
  labelStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={S.container}>
      <Text style={[theme.textVariants.body.b1, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  container: {
    padding: theme.spacing.xxxs,
  },
});
export default ButtonText;
