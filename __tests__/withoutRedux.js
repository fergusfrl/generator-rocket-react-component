"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const expectedOutput = require("./expectedOutput");

describe("generates file structure without redux", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      componentName: "TestComponent",
      withRedux: false
    });
  });

  it("creates directory structure", () => {
    assert.file([
      "TestComponent/TestComponentContainer.js",
      "TestComponent/TestComponentView.js",
      "TestComponent/index.js"
    ]);

    assert.noFile([
      "TestComponent/actionTypes.js",
      "TestComponent/actions.js",
      "TestComponent/reducer.js"
    ]);
  });
});

describe("generates file content without redux", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      componentName: "TestComponent",
      withRedux: false
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

  it("successfully formats the React Container Component file", () => {
    assert.equalsFileContent(
      "TestComponent/TestComponentContainer.js",
      expectedOutput.containerFileNoRedux
    );
  });
});
