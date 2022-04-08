import React from 'react';
import {Box, NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box backgroundColor="amber.900">Draw Io</Box>
    </NativeBaseProvider>
  );
}
