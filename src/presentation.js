// Import React
import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Code,
  Text
} from 'spectacle';
import { v4 as uuid } from 'uuid';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import { boxed, literals } from './assets/';
// Import Spectacle Core tags
// Import theme
// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#111',
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
        transition={['zoom', 'fade', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide transition={['slide']} bgColor="secondary">
          <Heading
            size={1}
            margin="0 0 50px"
            fit
            lineHeight={1.5}
            textColor="primary"
          >
            <code>{`{key: /objects?/}`}</code>
          </Heading>
          <Text textColor="primary" bold>
            Follow along at
          </Text>
          <Text margin="15px 0" textColor="tertiary">
            https://prime-objects.<span role="img" aria-label="computer emoji">
              🖥
            </span>
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>.ws
          </Text>
          <Notes>
            <ul>
              <li>
                Remind them of the url, or to go to{' '}
                <strong>prime-objects.xn--sz8hwn.ws</strong>
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} textColor="primary">
            Me?
          </Heading>
          <Image fill src="http://images.memes.com/meme/693715" />
          <Notes>
            <ul>
              <li>"So, who am I?"</li>
              <li>Prime Grad</li>
              <li>Frontend Developer at ActiFi</li>
              <li>JavaScript Enthusiast</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading bold size={1} lineHeight={1.2}>
            Myth
          </Heading>
          <BlockQuote>
            <Quote>"Everything in Javascript is an object."</Quote>
          </BlockQuote>
          <Notes>
            <ul>
              <li>
                <h1>
                  "Let's talk about a common misconception in Javascript. That
                  'everything is an object'.""
                </h1>
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading textColor="primary">Primitive Types?</Heading>
          <Appear>
            <List textColor="primary">
              {[
                'String',
                'Number',
                'Boolean',
                'Null',
                'Undefined',
                'Symbol (new in ES6)'
              ].map(str => {
                return (
                  <ListItem key={uuid()} style={{ width: 500 }} margin="0 auto">
                    {str}
                  </ListItem>
                );
              })}
            </List>
          </Appear>
          <Appear>
            <Text textSize={96} bold>
              <span role="img" aria-label="confused emoji">
                🤔
              </span>
            </Text>
          </Appear>
          <Notes>
            <ul>
              <li style={{ borderLeft: '1px solid hotpink', paddingLeft: 10 }}>
                <h1>"What is there other than objects in Javascript"</h1>
                <ul>
                  {[
                    'String',
                    'Number',
                    'Boolean',
                    'Null',
                    'Undefined',
                    'Symbol (new in ES6)'
                  ].map(str => <li key={uuid()}>{str}</li>)}
                </ul>
              </li>
              <li>Functions and Arrays are sub-types of Objects.</li>
              <li>Functions callable objects</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Image
            width={600}
            src="http://memecrunch.com/meme/4L5LA/nothing-goes-over-my-head-my-reflexes-are-too-fast-i-would-catch-it/image.png"
          />
          <Notes>
            <ul>
              <li>"And now we're in over our head, right?"</li>
              <li>Boxing</li>
            </ul>
          </Notes>
        </Slide>
        <CodeSlide
          transition={['slide']}
          margin={0}
          bgColor="secondary"
          lang="javascript"
          code={literals}
          ranges={[
            { loc: [0, 8], title: 'Literals' },
            { loc: [0, 1], note: "typeof num ➡ 'number'" },
            { loc: [1, 2], note: "typeof str ➡ 'string'" },
            { loc: [2, 3], note: "typeof bool ➡ 'boolean'" },
            { loc: [3, 4], note: "typeof arr ➡ 'object'" },
            { loc: [4, 7], note: "typeof func ➡ 'function'" },
            { loc: [7, 8], note: "typeof obj ➡ 'object'" }
          ]}
        />
        <CodeSlide
          transition={['slide']}
          margin={0}
          bgColor="secondary"
          lang="javascript"
          code={boxed}
          ranges={[
            { loc: [0, 10], title: 'Boxed' },
            { loc: [0, 1], note: "typeof numBox ➡ 'object'" },
            { loc: [1, 2], note: "typeof strBox ➡ 'object'" },
            { loc: [2, 3], note: "typeof boolBox ➡ 'object'" },
            { loc: [3, 4], note: "typeof arrBox ➡ 'object'" },
            { loc: [4, 7], note: "typeof funcBox ➡ 'function'" },
            { loc: [7, 10], note: "typeof objBox ➡ 'object'" }
          ]}
        />
      </Deck>
    );
  }
}
