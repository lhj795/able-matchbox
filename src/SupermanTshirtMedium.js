import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import supermanimg from './img/supermanImage.jpeg';

const useStyles = makeStyles(({
    wrap: {
        backgroundColor: "red",
        margin: "0",
        width: "100vw",
        height: "100vh",
        overflow: "scroll",
    },
    body: {
        margin: "3rem 1rem 1rem 1rem",
        height: "auto",
        width: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "white",
    },
    header: {
        display: "flex",
        justifyContent: "center",
    },
    h1: {
        fontFamily: "Roboto-Bold",
        fontSize: "1.563rem",
        margin: "1rem 0 1rem 0"
    },
    h2: {
        fontFamily: "Roboto-Bold",
        fontSize: "1.25rem",
        margin: "0",
    },
    desc: {
        fontFamily: "Roboto-Regular",
        fontSize: "1.25rem",
        margin: "0",
    },
    shirtImg: {
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        justifyContent: "center",
    },
    descSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "1rem 0"
    }
}));

export default function SupermanTShirtSmall(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.wrap}>
            <div className={classes.body}>
                <div className={classes.header}>
                    <p className={classes.h1}>Item Information</p>
                </div>
                <div className={classes.image}>
                    <img className={classes.shirtImg} id="Superman T-Shirt Image" alt="Superman T-Shirt" src={supermanimg}/>
                </div>
                <p className={classes.h1}>Providence Superman T-Shirt</p>
                <hr className={classes.hr}/>
                <div className={classes.descSection}>
                    <p className={classes.h2}>title</p>
                    <p className={classes.desc}>desc</p>
                </div>
                <hr/>
            </div>
        </div>
    )
};
