import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import "./MuiSearch.css";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@material-ui/core/IconButton";



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginLeft: 0,
    /* width: '100%', */
   [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
   /*  width: 'auto', */
  },
}));

/* const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })); */
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      color: 'black',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '35ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  export default function MuiSearch(prop) {
    return (
      
      
        <Search>
          <IconButton className="searchIconButton" onClick={()=>{
                prop.setInputHandler(prop.searchElement)
                // mögliches toDo setInput über Context anstatt prop!
            }}>
            <SearchIcon  />
          </IconButton>

          
          <StyledInputBase
            placeholder="Ort"
            inputProps={{ 'aria-label': 'search' }}
            onKeyDown={(e)=>{
              if (e.key === 'Enter') {
                prop.setInputHandler(prop.searchElement)
              }
            }}
            onChange={prop.onChangeProp}
          />
           
        </Search>
       
    
 
);
  }