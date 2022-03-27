import React from 'react';
import { useLocation } from 'react-router-dom';
import './ShowAllPictures.css';
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router';


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



const ShowAllPictures = () => {

    const { state } = useLocation(); // props Daten des Items
    const history = useHistory();
    return (
        <Container>
            <ThemeProvider theme={ColorTheme}>
                <div className="showAllPictures_flex">
                    <div className="showAllPictures_back">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => history.goBack()}
                        >zurück
                        </Button>

                    </div>
                    <div><h2 className="showAllPics_h2">Bilder der Unterkunft</h2></div>
                </div>



                {state.pictures.map((picture, index) => (
                    <div key={index} className="showAllPictures_allPics">
                        <img className="showAllPics_img" alt="Bilder der Unterkunft" src={picture} />
                    </div>
                ))
                }

            </ThemeProvider>
        </Container>
    )

}
export default ShowAllPictures;