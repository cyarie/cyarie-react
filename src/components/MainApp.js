import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const MainApp = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

MainApp.propTypes = {
    children: PropTypes.element
};

export default MainApp;