import {ThemeProvider} from '@shopify/restyle';
import * as React from 'react';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import theme from '../theme';

const App: React.FC<any> = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text fontWeight="bold">Hello, World!!</Text>
        <Button label="Click Me" variant="primary" />
      </Box>
    </ThemeProvider>
  );
};

export default App;
