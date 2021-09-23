import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {theme} from '../../../shared/styles/theme';

type ButtonIconProps = {
  onPress: () => void;
  /** Icon stype =  Feather */
  iconName: string;
  size?: number;
};
const defaultProps: ButtonIconProps = {
  size: theme.spacing.l,
  onPress: () => {},
  iconName: '',
};

const ButtonIcon: React.FC<ButtonIconProps> = ({onPress, iconName, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={size} />
    </TouchableOpacity>
  );
};

ButtonIcon.defaultProps = defaultProps;
export default ButtonIcon;
