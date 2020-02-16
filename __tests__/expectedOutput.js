const indexFile = `export { default } from "./TestComponentContainer";
`;

const viewFile = `import React from "react";

const TestComponentView = () => {
  return <h1>TestComponent</h1>;
};

TestComponentView.propTypes = {
  // Empty
};

export default TestComponentView;
`;

const actionTypesFile = `export const ACTION = "ACTION";
`;

const actionsFile = `import { ACTION } from "./actionTypes";

export const action = () => dispatch => {
  dispatch({ type: ACTION });
};
`;

const reducerFile = `import { ACTION } from "./actionTypes";

const initialState = {};

function doSomething(state) {
  return { ...state };
}

const actionMap = {
  [ACTION]: doSomething
};

export default function TestComponent(state = initialState, action) {
  const method = actionMap[action.type];
  if (method) {
    return method(state, action);
  }

  return state;
}
`;

const containerFileNoRedux = `import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

// Views
import TestComponentView from "./TestComponentView";

const TestComponentContainer = (props, context) => {
  return <TestComponentView {...props} />;
};

TestComponentContainer.propTypes = {
  // Empty
};

TestComponentContainer.contextTypes = {
  componentContext: PropTypes.object,
  componentConfig: PropTypes.object
};

export default injectIntl(TestComponentContainer);
`;

const containerFileWithRedux = `import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { injectIntl } from "react-intl";

// Actions
import { action } from './actions';

// Views
import TestComponentView from "./TestComponentView";

const TestComponentContainer = (props, context) => {
  return <TestComponentView {...props} />;
};

const mapDispatchToProps = {
  action
};

const mapStateToProps = state => ({
  // Empty
});

TestComponentContainer.propTypes = {
  // Empty
};

TestComponentContainer.contextTypes = {
  componentContext: PropTypes.object,
  componentConfig: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TestComponentContainer));
`;

module.exports = {
  actionsFile,
  actionTypesFile,
  containerFileNoRedux,
  containerFileWithRedux,
  indexFile,
  reducerFile,
  viewFile
};
