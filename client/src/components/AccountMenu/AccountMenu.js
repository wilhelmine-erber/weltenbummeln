import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
/* import Typography from '@mui/material/Typography'; */
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';

import { useContext } from 'react';
import { HomepageContext } from '../../context/context';
import { useHistory } from "react-router-dom";

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    //import from context.js
    const { isRegistered, setIsRegistered } = useContext(HomepageContext);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        setIsRegistered(false)
    }
    //console.log('In homepage, isRegistered:', isRegistered);

    // using React Hook: useHistory
    const history = useHistory();

    const handleNewAccount = () => {
        history.push("/signup");
    }
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                        <Avatar src="/broken-image.jpg" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem disabled={!isRegistered}>
                    <Avatar /> Profil
                </MenuItem>
                <MenuItem disabled={!isRegistered}>
                    <Avatar /> Mein Konto
                </MenuItem>
                <Divider />
                <MenuItem
                    disabled={!isRegistered}
                    onClick={handleNewAccount}
                >

                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Weiteres Konto hinzufügen
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Einstellungen
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <HelpIcon fontSize="small" />
                    </ListItemIcon>
                    Hilfe
                </MenuItem>
                <MenuItem
                    disabled={!isRegistered}
                    onClick={handleLogout}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Ausloggen
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
