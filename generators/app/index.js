"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
// Const rename = require("gulp-rename");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stylish ${chalk.red(
          "generator-rockets-react-component"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "componentName",
        message: "Component Name:",
        default: "NewComponent"
      },
      {
        type: "confirm",
        name: "withRedux",
        message: "Create component with Redux hooked up?"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.componentName;
      this.props = props;
    });
  }

  writing() {
    const { componentName, withRedux } = this.props;

    // Copy Container
    this.fs.copyTpl(
      this.templatePath(`{componentName}/{componentName}Container.js`),
      this.destinationPath(`${componentName}/${componentName}Container.js`),
      {
        componentName,
        withRedux
      }
    );

    // Copy View
    this.fs.copyTpl(
      this.templatePath(`{componentName}/{componentName}View.js`),
      this.destinationPath(`${componentName}/${componentName}View.js`),
      { componentName }
    );

    // Copy index
    this.fs.copyTpl(
      this.templatePath(`{componentName}/index.js`),
      this.destinationPath(`${componentName}/index.js`),
      { componentName }
    );

    if (withRedux) {
      // Copy actions types
      this.fs.copy(
        this.templatePath(`{componentName}/actionTypes.js`),
        this.destinationPath(`${componentName}/actionTypes.js`)
      );

      // Copy actions
      this.fs.copy(
        this.templatePath(`{componentName}/actions.js`),
        this.destinationPath(`${componentName}/actions.js`)
      );

      // Copy reducer
      this.fs.copyTpl(
        this.templatePath(`{componentName}/reducer.js`),
        this.destinationPath(`${componentName}/reducer.js`),
        { componentName }
      );
    }
  }

  install() {
    this.installDependencies();
  }
};
