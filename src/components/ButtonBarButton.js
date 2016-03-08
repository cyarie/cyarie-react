import React, { PropTypes } from 'react';

const ButtonBarButton = (props) => {
    return (
        <a className="btn btn-default text-right" href={props.data.link} target="_blank"><i className={props.data.faDetails} /></a>
    );
};

export default ButtonBarButton;