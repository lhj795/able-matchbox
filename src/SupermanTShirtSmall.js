import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import supermanimg from './img/supermanImage.jpeg';
import parchedLogo from './img/parchedLogo.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({
    wrap: {
        backgroundColor: "blue",
        margin: "0",
        width: "100vw",
        height: "100vh",
        overflow: "scroll",
    },
    body: {
        margin: "3rem 1rem 1rem 1rem",
        height: "auto",
        width: "auto",
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
        fontFamily: "Roboto-Medium",
        fontSize: "1.25rem",
        margin: "0",
    },
    subDesc: {
        fontFamily: "Roboto-Regular",
        fontSize: "1rem",
        margin: "0",
    },
    image: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#F4F6F5",
    },
    shirtImg: {
        width: "50%",
        maxWidth: "500px",
        margin: "0 0 0 6rem",
    },
    parchedLogo: {
        width: "70px",
        height: "fit-content",
        margin: "1rem 0 1rem 1rem",
    },
    descContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "1rem 0",
        alignItems: "center"
    },
    brandContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "1rem 0 0.5rem 0",
        alignItems: "center"
    },
    priceContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "1rem 0 0.5rem 0"
    },
    color: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
    },
    verticalSection: {
        display: "flex",
        flexDirection: "column",
        margin: "0 0 1rem 0"
    },
    button: {
        width: "100%",
        display: "flex",
        flexDirection: "row-reverse"
    },
    hr: {
        height: "1px",
        width: "100%",
        margin: "0",
        padding: "0",
        backgroundColor: "white",
    },
    colorCircle: {
        height: "2rem",
        width: "2rem",
        backgroundColor: '#1D5289',
        border: "solid 2px white",
        borderRadius: "50%",
        margin: "0 0 0 1rem",
    }
}));

const PrimaryButton = withStyles((theme) => ({
    root: {
        fontFamily: "Roboto-Bold",
        fontSize: '1rem',
        backgroundColor: "#FFFFFF",
        borderRadius: "6px",
        boxSizing: "border-box",
        padding: "4px 16px",
        width: "auto",
        "&:hover" :{
            backgroundColor: "#333333",
            border: "4px solid #333333",
        },
    },
    text: {
        color: "#1F2223",
    },
    label:{
        textTransform:"capitalize",
    }
}))(Button);

export default function SupermanTShirtSmall(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.wrap}>
            <div className={classes.body}>
                <div className={classes.header}>
                    <p className={classes.h1}>Item Information</p>
                </div>
                <div className={classes.image}>
                    <img className={classes.shirtImg} id="Clothing Image" alt="Superman T-Shirt" src={supermanimg}/>
                    <img className={classes.parchedLogo} id="Brand Name" alt="Parched" src={parchedLogo}/>
                </div>
                <p className={classes.h1}>Providence Superman T-Shirt</p>
                <div className={classes.hr}/>
                <div className={classes.verticalSection}>
                    <div className={classes.brandContainer}>
                        <p className={classes.h2}>Brand</p>
                        <p className={classes.desc}>Parched</p>
                    </div>
                    <div className={classes.button}>
                        <PrimaryButton><a style={{textDecoration: "none", color: "#1F2223",}} href="https://www.parchedusa.com/" target="_blank" rel="noreferrer">Visit Website</a></PrimaryButton>
                    </div>
                </div>
                <div className={classes.hr}/>
                <div className={classes.descContainer}>
                    <p className={classes.h2}>Category</p>
                    <p className={classes.desc}>Unisex T-Shirt</p>
                </div>
                <div className={classes.hr}/>
                <div className={classes.descContainer}>
                    <p className={classes.h2}>Gender</p>
                    <p className={classes.desc}>Unisex</p>
                </div>
                <div className={classes.hr}/>
                <div className={classes.descContainer}>
                    <p className={classes.h2}>Size</p>
                    <p className={classes.desc}>Small</p>
                </div>
                <div className={classes.hr}/>
                <div className={classes.verticalSection}>
                    <div className={classes.priceContainer}>
                        <p className={classes.h2}>Price</p>
                        <p className={classes.desc}>$26.00</p>
                    </div>
                    <div className={classes.button}>
                        <p className={classes.subDesc}>Tax included</p> 
                    </div>
                </div>
                <div className={classes.hr}/>
                <div className={classes.descContainer}>
                    <p className={classes.h2}>Color</p>
                    <div className={classes.color}>
                        <p className={classes.desc}>True Royal Blue</p>
                        <div className={classes.colorCircle}/>
                    </div>
                </div>
                <div className={classes.hr}/>
                <div className={classes.descContainer}>
                    <p className={classes.h2}>Pattern</p>
                    <p className={classes.desc}>desc</p>
                </div>
            </div>
        </div>
    )
};
