import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import Box from './Box';

interface Props {}

const Spinner: React.FunctionComponent<Props> = () => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color="grey" />
    </Box>
  );
};

export default Spinner;
