import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  createVariant,
  layout,
  LayoutProps,
  PositionProps,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import React, {ComponentProps} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Theme} from '../theme';
import Text from './Text';

const restyleFunctions = [
  spacing,
  border,
  backgroundColor,
  layout,
  color,
  createVariant({themeKey: 'buttonVariants'}),
];
type Props = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme> &
  TouchableOpacityProps &
  LayoutProps<Theme> &
  ComponentProps<typeof TouchableOpacity> & {
    label: string;
    loading?: boolean;
  } & VariantProps<Theme, 'buttonVariants'>;

const Button = ({onPress, label, loading, ...rest}: Props) => {
  const {variant} = rest;
  //@ts-ignore
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress} {...props}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? 'white' : 'subtitle'}
        />
      ) : (
        <Text
          variant={variant === 'primary' ? 'buttonLabel' : 'subtitle'}
          fontSize={16}
          fontWeight="500">
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
