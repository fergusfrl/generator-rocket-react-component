import React from "react";
import PropTypes from "prop-types";
<% if (withRedux) { %>import { connect } from 'react-redux';
<% } %>import { injectIntl } from "react-intl";
<% if (withRedux) { %>
// Actions
import { action } from './actions';
<% } %>
// Views
import <%= componentName %>View from "./<%= componentName %>View";

const <%= componentName %>Container = (props, context) => {
  return <<%= componentName %>View {...props} />;
};
<% if (withRedux) { %>
const mapDispatchToProps = {
  action
};

const mapStateToProps = state => ({
  // Empty
});
<% } %>
<%= componentName %>Container.propTypes = {
  // Empty
};

<%= componentName %>Container.contextTypes = {
  componentContext: PropTypes.object,
  componentConfig: PropTypes.object
};

export default <% if (withRedux) { %>connect(
  mapStateToProps,
  mapDispatchToProps
)(<% } %>injectIntl(<%= componentName %>Container)<% if (withRedux) { %>)<% } %>;
