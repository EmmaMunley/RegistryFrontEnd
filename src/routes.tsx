import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Homepage from './components/Homepage';
// import { me } from './store';

/**
 * COMPONENT
 */
export default class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    // const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Homepage} />

        {/* {isLoggedIn && (
          <Switch> */}
        {/* Routes placed here are only available after logging in */}
        {/* <Route exact path="/" component={Homepage} />
            <Route exact path="/confirm" component={ConfirmationPage} /> */}
        {/* <Route path="/products" component={AllProducts} /> */}
        {/* </Switch> */}
        {/* )} */}
        {/* Displays our Login component as a fallback */}
      </Switch>
    );
  }
}

// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id,
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// };
