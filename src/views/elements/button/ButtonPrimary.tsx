import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {theme} from '../../../shared/styles/theme';

type ButtonPrimaryProps = {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  onPress,
  label,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[S.container, style]}
      onPress={() => onPress()}>
      <Text style={[theme.textVariants.bodyBold.bb1, S.label]}>{label}</Text>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.green,
    borderRadius: theme.spacing.xs,
    padding: theme.spacing.m,
  },
  label: {color: 'white'},
});
export default ButtonPrimary;
