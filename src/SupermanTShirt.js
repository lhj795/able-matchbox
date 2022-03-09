import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    
}));

export default function Base(props) {
    const classes = useStyles(props);

    return (
        <div>
            Hello Able!
        </div>
    );
}
