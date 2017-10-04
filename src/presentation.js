// Import React
import React from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

// Import Spectacle Core tags
// Import theme
// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Mukta',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <code>{`{key: /objects?/}`}</code>
          </Heading>
          <Text margin="30px 0 0" textColor="secondary" size={1} fit bold>
            Follow along at&nbsp;
            <span style={{ color: '#03A9FC', textDecoration: 'underline' }}>
              https://prime-objects.🖥🚀.ws
            </span>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
