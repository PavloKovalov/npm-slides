// Import React
import React from "react"

// Import Spectacle Core tags
import {
  Deck,
  Spectacle,
  Slide,
  Heading,
  Text,
  Image,
  Layout,
  Fill,
  CodePane,
  List,
} from "spectacle"

import CodeSlide from "spectacle-code-slide"

import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")


const images = {}

preloader(images)

const theme = createTheme({
  primary: "#122b45",
  bgSecondary: "#000000",
  textSecondary: "#cccccc",
  textPrimary: "#f6cc3d",
})

const code = {}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="bar">
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="textPrimary">
              Modules
            </Heading>
            <Heading size={1} textColor="textSecondary">
              ES2015, CommonJS
            </Heading>
          </Slide>
          <Slide>
            <Text textColor="textSecondary" bold margin="0 0 15px">What is npm?</Text>
            <Text textColor="textSecondary" bold margin="0 0 15px">What is package.json file?</Text>
            <Text textColor="textSecondary" bold margin="0 0 15px">How to manage dependencies?</Text>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
}
