import {BoxProps} from '@shopify/restyle';
import React from 'react';
import {Theme} from '../theme';
import Box from './Box';

interface Props extends BoxProps<Theme> {}

const Row: React.FunctionComponent<Props> = props => {
  return (
    <Box flexDirection="row" alignItems="center" {...props}>
      {props.children}
    </Box>
  );
};

export default Row;
