import React from 'react';
import './Header-sticky.css';
import Check from "./Check";
import { useEffect, useState } from 'react';
//import { HomepageContext } from '../../context/context';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import logo from '../../assets/logos/footer-logo.jpg';
import { useHistory } from "react-router-dom"; //von Salem
import AccountMenu from '../AccountMenu/AccountMenu';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#03989e',
        },
        secondary: {
            main: '#e1bb92',
        },
        background: {
            default: '#eae9e8',
        },
        error: {
            main: '#ff8c82',
        },
        warning: {
            main: '#eabd78',
        },
        info: {
            main: '#427c7e',
        },
        success: {
            main: '#ade8af',
        },
    },
});

const Header = () => {

    // neuer State für Header-sticky
    const [isSticky, setIsSticky] = useState(false);

    // input
    //const { setInput } = useContext(HomepageContext);

    // handleChange
    // const handleChange = (e) => {
    //     const userInput = e.target.value.trim();
    //     setInput(userInput)
    // }
    // von Salem
    const history = useHistory();
    const handleSignIn = () => {
        history.push("/signin");
    }

    // von Salem
    const handleSignUp = () => {
        history.push("/signup");
    }

    const path = '/';

    useEffect(() => { 
        window.addEventListener('scroll', handleScroll);
        return function cleanup(){
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const handleScroll = () => {
         //console.log(window.scrollY);
        if (window.scrollY >= 320 && isSticky === false) {
            setIsSticky(true); 
        } else if (window.scrollY < 320 && isSticky === true) {
            setIsSticky(false);
        }
    }

    return (

        <div className={["header2", isSticky ? "header2-sticky":""].join(' ')} id='myHeader'>
            <div className="header2_top">
                <Link to={path} className="link_home2">
                    <div className='header2_left'>
                        <div className='header2_left_logo'>
                            <img
                                src={logo}
                                alt="weltenbummeln"
                            />
                        </div>
                    </div>
                </Link>
                <div className="header2_right">
                    <ThemeProvider theme={theme}>
                        <Stack spacing={1} direction="row">
                            <Button
                                variant="contained"
                                color="primary"
                                className="signUp"
                                size="small"
                                onClick={handleSignUp}
                            >Anmelden
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className="signIn"
                                size="small"
                                onClick={handleSignIn}
                            >Einloggen
                            </Button>
                        </Stack>
                        <AccountMenu />
                    </ThemeProvider>

                    {/* <div className="burger_menu">
                        <a href={} onClick={handleSignUp}>Registrieren</a>
                        <a href={} onClick={handleSignIn}>Einloggen</a>
                        <a href={<AccountMenu />}>Profil</a>
                    </div> */}
                </div>
            </div>
            <div className="header2_kalender">
                <div>
                    
                    {<Check />}
                </div>
            </div>


        </div>

    );
};


export default Header;