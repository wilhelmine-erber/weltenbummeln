import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const NotMatch = () => {

  const { state } = useLocation();

  console.log(state);

  const divStyle = {
    margin: "100px 0"
  }

  return (
    <Container>
      <div style={divStyle}>

        <Typography variant="h4">Oh nein... Diese Seite haben wir leider nicht gefunden</Typography>

        <p>Versuche es auf der Homepage nochmal:</p>

        <Link to={{ pathname: "/" }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
          >zurück
          </Button>
        </Link>
      </div>

    </Container>
  )
}
export default NotMatch