import {StyleSheet} from 'react-native';
import {theme} from './theme';

const containerPrimaryStyle = StyleSheet.create({
  containerPrimary: {
    borderRadius: theme.spacing.xxs,
    backgroundColor: theme.colors.silver,
  },
  containerError: {
    borderRadius: theme.spacing.xxs,
    backgroundColor: theme.colors.red,
  },
  containerSuccess: {
    borderRadius: theme.spacing.xxs,
    backgroundColor: theme.colors.green,
  },
});

export {containerPrimaryStyle};
