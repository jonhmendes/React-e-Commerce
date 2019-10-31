import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Creators as ErrorActions } from '~/store/ducks/error';

import styles from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<View style={styles.container}>
  <Text style={styles.message}>{message}</Text>
  <TouchableOpacity style={styles.button} onPress={hideError}>
    <Icon name="times" size={20} color="#FFF" />
  </TouchableOpacity>
</View>
);

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
