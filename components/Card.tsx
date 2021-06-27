import {BoxProps} from '@shopify/restyle';
import React from 'react';
import {Theme} from '../theme';
import Box from './Box';

interface CardProps extends BoxProps<Theme> {}

const Card: React.FunctionComponent<CardProps> = props => {
  return (
    <Box
      margin="m"
      padding="l"
      flex={1}
      maxHeight="80%"
      borderRadius={10}
      backgroundColor="cardBackground"
      {...props}>
      {props.children}
    </Box>
  );
};

export default Card;
