import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';
const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent: '#8B5CFF',
    grlu: '#c6d0d7',
    opGreen: '#1a89174d',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
