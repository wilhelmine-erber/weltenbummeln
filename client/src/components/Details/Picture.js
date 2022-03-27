import React from 'react';
import { useLocation } from 'react-router-dom';
import './Picture.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const ColorTheme = createTheme({
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

const Picture = () => {


  const { state, pathname } = useLocation(); // props Daten des Items

  const picArray = state.images.moreImages;

  const bildermap = picArray.map((pic, index) => {
    return <div key={index} className="pics_map">
      <img src={pic} alt="Bilder der Unterkunft" />
    </div>
  });

  return (
    <div>
      <ThemeProvider theme={ColorTheme}>
        <h1>{state.type}</h1>
        <h4>{state.title}</h4>

        <div className="pictures_Details">
          <div className="pictures_firstPic">
            <img src={picArray[0]} alt="Bilder der Unterkunft" />
          </div>
          <div className="pictures_smallPics grid">
            {bildermap}
          </div>
        </div>

        <Link
          to={{
            pathname: `${pathname}/showAllPictures`,
            state: { pictures: picArray }
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
          >alle Fotos anzeigen
          </Button>

        </Link>
      </ThemeProvider>
    </div>
  )
}

export default Picture;