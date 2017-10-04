// Import React
import React from 'react';
import { Deck, Heading, Image, Notes, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';

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

const images = {
  me: require('./assets/profile.jpg')
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'fade', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <code>{`{key: /objects?/}`}</code>
          </Heading>
          <Text margin="30px 0 0" textColor="secondary" size={1} fit bold>
            Follow along at{' '}
            <span style={{ color: '#03A9FC', textDecoration: 'underline' }}>
              https://prime-objects.🖥🚀.ws
            </span>
            <small style={{ display: 'block', fontSize: 10, marginTop: 30 }}>
              Or{' '}
              <span style={{ color: '#03A9FC' }}>
                https://prime-objects.xn--sz8hwn.ws/#/
              </span>, if you prefer
            </small>
            <Notes>
              <ul>
                <li>
                  Remind them of the url, or to go to{' '}
                  <strong>prime-objects.xn--sz8hwn.ws</strong>
                </li>
              </ul>
            </Notes>
          </Text>
        </Slide>
        <Slide>
          <Image
            width="100%"
            src="https://media2.giphy.com/media/KQm5O05y9rzQA/giphy.gif"
          />

          <Notes>
            <ul>
              <li>"So, who am I?"</li>
              <li>Prime Grad</li>
              <li>Frontend Developer at ActiFi</li>
              <li>JavaScript Enthusiast</li>
              <li>Rabid learner</li>
            </ul>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
