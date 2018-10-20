import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Map from './Map';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmp: '',
    };
  }

  render() {
    return (
      <Container>
        <Map />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

App.propTypes = {
  appState: PropTypes.string
};

const mapStateToProps = state => ({
  appState: state.appState,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
