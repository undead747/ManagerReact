import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>Trần Công Minh inspise from <a href="https://coreui.io">CoreUI</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Nhóm  Trường ĐH Bách Khoa Đà Nẵng</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
