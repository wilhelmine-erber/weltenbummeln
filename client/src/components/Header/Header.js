import React, { useContext } from 'react';
import './Header.css';
import Check from "../Header/Check";
import { HomepageContext } from '../../context/context';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import logo from '../../assets/logos/logo-klein.jpg';
import { useHistory } from "react-router-dom"; //von Salem
import AccountMenu from '../AccountMenu/AccountMenu';
import MuiSearch from '../SearchFieldMui/MuiSearch';

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

    // input
    const { setInput, searchEl, setSearchEl } = useContext(HomepageContext);

    // handleChange
    const handleChange = (e) => {
        const userInput = e.target.value.trim();
        /* setInput(userInput) */
        setSearchEl(userInput);
        //console.log(userInput)
    }
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

    return (
        <div className='header'>
            <Link to={path} className="link_home">
                <div className='header_left'>
                    <div className='header_left_logo'>
                        <img
                            src={logo}
                            alt="weltenbummeln"
                        />
                    </div>

                </div>
            </Link>
            <div className="header_land_search">
                <MuiSearch
                    onChangeProp={handleChange}
                    setInputHandler={setInput}
                    searchElement={searchEl}
                />
                {<Check />}
            </div>
            <div className="header_right">
                <div className="header_right_flex">
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2} direction="row">
                            <Button
                                variant="contained"
                                color="primary"
                                className="signUp"
                                size="small"
                                onClick={handleSignUp} //von Salem
                            >Anmelden
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className="signIn"
                                size="small"
                                onClick={handleSignIn} //von Salem
                            >Einloggen
                            </Button>
                        </Stack>
                        <AccountMenu /> {/* von Salem */}
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};


export default Header;