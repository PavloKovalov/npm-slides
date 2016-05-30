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

const code = {
  npmInit: require('raw!../assets/npm_init.example'),
  commonJS: require('raw!../assets/commonjs.example'),
  'package.json': require('raw!../package.json'),
}

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
            <List>
            <Text textColor="textSecondary" bold margin="0 0 15px">What is npm?</Text>
            <Text textColor="textSecondary" bold margin="0 0 15px">What is package.json file?</Text>
            <Text textColor="textSecondary" bold margin="0 0 15px">How to manage dependencies?</Text>
            <Text textColor="textSecondary" bold margin="0 0 15px">What is CommonJS?</Text>
            <Text textColor="textSecondary" bold margin="0 0 15px">ES2015 modules</Text>
            </List>
          </Slide>
          <Slide>
            <Heading size={4} textColor="textPrimary">
              npm
            </Heading>
            <List>
              <Text textColor="textSecondary" margin="0 0 15px">CLI for dependencies managmenet</Text>
              <Text textColor="textSecondary" margin="0 0 15px">Entry point to the application</Text>
              <Text textColor="textSecondary" margin="0 0 15px">Allows run scripts</Text>
              <Text textColor="textSecondary" margin="0 0 15px">New dependencies can be saved to package.json</Text>
            </List>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.npmInit}
            ranges={[
              { loc: [0, 0], title: "Init new project" },
              { loc: [0, 1], note: "Run `npm init` from console" },
              { loc: [1, 9], note: "Command info" },
              { loc: [10, 20], note: "Fill up requred fields" },
              { loc: [22, 33], note: "Preview the result" },
              { loc: [35, 36], note: "Write `package.json` file" },
            ]}
          />

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code['package.json']}
            ranges={[
              { loc: [0, 0], title: "package example" },
              { loc: [1, 4], note: "package name, version, description" },
              { loc: [4, 5], note: "Entry point" },
              { loc: [5, 13], note: "Custom scripts executed by `npm run <script>`" },
              { loc: [10, 12], note: "Command and hook" },
              { loc: [15, 25], note: "Project dependencies" },
              { loc: [16, 18], note: "^ means update major versions automatically" },
              { loc: [21, 22], note: "~ means update minor versions automatically" },
              { loc: [26, 32], note: "Development environment dependencies" },
              { loc: [26, 26], note: "New dependecy will be added if `npm install <name>` called with --save or --save-dev" },
            ]}
          />
        <Slide>
          <Heading size={2} textColor="textPrimary">
            Before ES2015
          </Heading>
        </Slide>
        <CodeSlide
          transition={["slide"]}
          lang="js"
          code={code.commonJS}
          ranges={[
            { loc: [0, 0], title: "CommonJs modules" },
            { loc: [0, 3], note: "Different `require` styles" },
            { loc: [0, 1], note: "Require a whole module" },
            { loc: [1, 2], note: "Require an attribute of module" },
            { loc: [2, 3], note: "Require module to current context" },

            { loc: [4, 12], note: "Export from module" },
            { loc: [13, 14], note: "Export object from module" },

            { loc: [15, 18], note: "Set modules attribute" },
            { loc: [21, 23], note: "Require module and use their attributes" },

            /* ensure understanding */
            { loc: [25, 26], note: "How module.exports looks like?" },
            { loc: [27, 28], note: "How module.exports looks like?" },
            { loc: [29, 30], note: "How module.exports looks like?" },

          ]}
        />

        </Deck>
      </Spectacle>
    )
  }
}
