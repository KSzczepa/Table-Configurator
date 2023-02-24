
import classes from './Box.module.css';
import React, { DOMElement } from 'react';

const Box: React.FC<{children: JSX.Element}> = (props) => {
    const box = <div className={classes.configView} id="box">
        {props.children}
    </div>;



    return box;
};

export default Box;