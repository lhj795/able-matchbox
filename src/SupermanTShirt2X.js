import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import groupImg from './img/groupImg.png';
import patternImg from './img/patternImg.png';
import wash from './img/wash.png';
import bleach from './img/bleach.png';
import temp from './img/temp.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({
    wrap: {
        backgroundColor: "#1F2223",
        margin: "0",
        width: "100vw",
        overflow: "scroll",
        fontSize: "100%",
    },
    body: {
        margin: "3rem 1rem 3rem 1rem",
        height: "auto",
        width: "auto",
        color: "#F4F6F5",
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
    h3: {
        fontFamily: "Roboto-Bold",
        fontSize: "1rem",
        margin: "1rem 0 0.5rem",
    },
    h4: {
        fontFamily: "Roboto-Bold",
        fontSize: "1.25rem",
        margin: "0 0 .75rem 0",
    },
    desc: {
        fontFamily: "Roboto-Medium",
        fontSize: "1rem",
        margin: "0",
    },
    descText: {
        fontFamily: "Roboto-Medium",
        fontSize: "1rem",
        margin: "1rem 0",
        lineHeight: "1.5",
    },
    instructionText: {
        fontFamily: "Roboto-Medium",
        fontSize: "1rem",
        margin: ".25rem 0",
        lineHeight: "1.5",
    },
    subDesc: {
        fontFamily: "Roboto-Regular",
        fontSize: ".875rem",
        margin: "0",
    },
    img: {
        width: "100%",
        backgroundColor: "#F4F6F5",
        display: "flex",
        justifyContent: "center",
    },
    patternImgContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#F4F6F5",
    },
    shirtImg: {
        width: "100%",
        maxWidth: "700px",
    },
    patternImg: {
        width: "50%",
        maxWidth: "200px",
        margin: "1rem 0",
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
        margin: "1rem 0 0"
    },
    color: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "0",
    },
    patternColor: {
        width: "50%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "0.5rem 0 0 0",
    },
    laundryInstruction: {
        display: "flex",
        flexDirection: "row",
        margin: "0",
        alignItems: "center",
    },
    laundryImg: {
        width: "1rem",
        height: "fit-content",
        margin: "0 1rem 0 0"
    },
    brandBox: {
        display: "flex",
        flexDirection: "column",
        margin: "0 0 1rem 0"
    },
    verticalContainer: {
        margin: "1rem 0"
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
        backgroundColor: "#F4F6F5",
    },
    trueRoyalBlue: {
        height: "1.25rem",
        width: "1.25rem",
        backgroundColor: '#1D5289',
        border: "solid 2px #F4F6F5",
        borderRadius: "50%",
        margin: "0 0 0 0.5rem",
    },
    lemonYellow: {
        height: "1.25rem",
        width: "1.25rem",
        backgroundColor: '#FCF451',
        border: "solid 2px #F4F6F5",
        borderRadius: "50%",
        margin: "0 0 0 .5rem",
    },
    trueRed: {
        height: "1.25rem",
        width: "1.25rem",
        backgroundColor: '#D83931',
        border: "solid 2px #F4F6F5",
        borderRadius: "50%",
        margin: "0 0 0 .5rem",
    },
}));

const PrimaryButton = withStyles((theme) => ({
    root: {
        fontFamily: "Roboto-Bold",
        fontSize: '.875rem',
        backgroundColor: "#FFFFFF",
        borderRadius: "6px",
        boxSizing: "border-box",
        padding: "2px 16px",
        width: "auto",
        "&:hover" :{
            backgroundColor: "#C4C4C4",
        },
    },
    text: {
        color: "#1F2223",
    },
    label:{
        textTransform:"capitalize",
    }
}))(Button);

export default function SupermanTShirt2X(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.wrap}>
            <div className={classes.body}>
                <div className={classes.header}>
                    <p className={classes.h1}>Item Information</p>
                </div>
                <div className={classes.img}>
                    <img className={classes.shirtImg} id="Clothing Image" alt="Superman T-Shirt" src={groupImg}/>
                </div>
                <p className={classes.h1}>Providence Superman T-Shirt</p>
                <div className={classes.hr}/>
                <div className={classes.brandBox}>
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
                    <p className={classes.desc}>2X</p>
                </div>
                <div className={classes.hr}/>
                <div className={classes.verticalContainer}>
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
                        <div className={classes.trueRoyalBlue}/>
                    </div>
                </div>
                <div className={classes.hr}/>
                <div className={classes.verticalContainer}>
                    <p className={classes.h2}>Description</p>
                    <p className={classes.descText}>
                    Providence, Rhode Island Superman T-Shirt. Premium quality unisex short-sleeved t-shirt, screen printed with water-based ink. Made with the softest airlume combed and ringspun cotton.
                    </p>
                </div>
                <div className={classes.hr}/>
                <div className={classes.verticalContainer}>
                    <p className={classes.h2}>Pattern</p>
                    <p className={classes.h3}>Detail</p>
                    <div className={classes.patternImgContainer}>
                        <img className={classes.patternImg} id="Clothing Image" alt="Superman T-Shirt" src={patternImg}/>
                    </div>
                    <div className={classes.color}>
                        <div className={classes.patternColor}>
                            <p className={classes.desc}>Lemon Yellow</p>
                            <div className={classes.lemonYellow}/>
                        </div>
                        <div className={classes.patternColor}>
                            <p className={classes.desc}>True Red</p>
                            <div className={classes.trueRed}/>
                        </div>
                    </div>
                    <p className={classes.descText}>
                        Yellow and red graphic print across the chest. Superman style text that says Providence, and small calligraphy that says Rhode Island underneath.
                    </p>
                </div>
                <div className={classes.hr}/>
                <div className={classes.verticalContainer}>
                    <p className={classes.h4}>Material</p>
                    <div className={classes.listContainer}>
                        <li className={classes.instructionText}>Solid colors are 100% cotton.</li>
                        <li className={classes.instructionText}>Heather colors are 52/48 cotton/polyester blend.</li>
                        <li className={classes.instructionText}>Ash is 99/1 cotton/polyester blend.</li>
                    </div>
                </div>
                <div className={classes.hr}/>
                <div className={classes.verticalContainer}>
                    <p className={classes.h4}>Laundry Instructions</p>
                    <div className={classes.listContainer}>
                        <div className={classes.laundryInstruction}>
                            <img className={classes.laundryImg} id="wash" alt="Wash" src={wash}/>
                            <p className={classes.instructionText}>
                            Machine wash gentle or delicate.
                            </p>
                        </div>
                        <div className={classes.laundryInstruction}>
                            <img className={classes.laundryImg} id="temp" alt="Temperature" src={temp}/>
                            <p className={classes.instructionText}>
                            Wash at or below 60°C.
                            </p>
                        </div>
                        <div className={classes.laundryInstruction}>
                            <img className={classes.laundryImg} id="bleach" alt="Bleach" src={bleach}/>
                            <p className={classes.instructionText}>
                            Do not bleach.                     
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
