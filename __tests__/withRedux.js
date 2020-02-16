"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const expectedOutput = require("./expectedOutput");

describe("generates file structure with redux", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      componentName: "TestComponent",
      withRedux: true
    });
  });

  it("creates parent directory structure", () => {
    assert.file([
      "TestComponent/TestComponentContainer.js",
      "TestComponent/TestComponentView.js",
      "TestComponent/index.js",
      "TestComponent/actions.js",
      "TestComponent/actionTypes.js",
      "TestComponent/reducer.js"
    ]);
  });
});

describe("generates file content with redux", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      componentName: "TestComponent",
      withRedux: true
    });
  });

  it("successfully formats the index.js file", () => {
    assert.equalsFileContent(
      "TestComponent/index.js",
      expectedOutput.indexFile
    );
  });

  it("successfully formats the React View Component file", () => {
    assert.equalsFileContent(
      "TestComponent/TestComponentView.js",
      expectedOutput.viewFile
    );
  });

  it("successfully formats the actionTypes.js file", () => {
    assert.equalsFileContent(
      "TestComponent/actionTypes.js",
      expectedOutput.actionTypesFile
    );
  });

  it("successfully formats the actions.js file", () => {
    assert.equalsFileContent(
      "TestComponent/actions.js",
      expectedOutput.actionsFile
    );
  });

  it("successfully formats the React Container Component file", () => {
    assert.equalsFileContent(
      "TestComponent/TestComponentContainer.js",
      expectedOutput.containerFileWithRedux
    );
  });

  it("successfully formats the reducer file", () => {
    assert.equalsFileContent(
      "TestComponent/reducer.js",
      expectedOutput.reducerFile
    );
  });
});
