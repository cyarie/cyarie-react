import React, { PropTypes } from 'react';
import ButtonBar from './ButtonBar';

const HomeComponent = () => {
    return (
        <div className="row main-div">
            <div className="col-md-10">
                <div className="text-right">
                    <h1><strong>Chris Yarie</strong></h1>
                    <ButtonBar />
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
