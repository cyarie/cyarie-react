import React, { PropTypes } from 'react';
import ButtonBarButton from './ButtonBarButton';
import { Link, IndexLink } from 'react-router';

const ButtonBar = (props) => {
    props = [
        {service: "twitter", link: "https://twitter.com/cyarie", faDetails: "fa fa-twitter fa-fw"},
        {service: "facebook", link: "https://facebook.com/chris.yarie", faDetails: "fa fa-facebook fa-fw"},
        {service: "linkedin", link: "https://www.linkedin.com/in/chrisyarie", faDetails: "fa fa-linkedin fa-fw"},
        {service: "github", link: "https://github.com/cyarie", faDetails: "fa fa-github fa-fw"},
        {service: "instagram", link: "https://instagram.com/cyarie/", faDetails: "fa fa-instagram fa-fw"}
    ];
    return (
        <div className="btn-group">
            {props.map(props => { return (<ButtonBarButton data={props} key={props.service}/>); })}
        </div>
    );
};

export default ButtonBar;