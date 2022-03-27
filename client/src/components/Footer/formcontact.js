import React from 'react';
import {Typography,Card,CardContent,Grid,TextField,Button} from '@material-ui/core';

function Formcontact() {
  return (
    <div className="Formcontact">
        <Card style= {{maxWidth: 600, margin: "40px auto 20px auto", padding:"20px 10px"}}>
          <CardContent>
            <Typography gutterBottom variant="h5">Kontaktiere uns</Typography>
            <Typography gutterBottom color="textSecondary" variant="body2"component="p">Füllen Sie dieses Formular aus und unsere Teams werden sich in weniger als 24 Studen bei ihnen melden.</Typography>
            <form>
            <Grid container spacing={2}>

              <Grid xs={12} sm={6}item>
                <TextField label="vorname" placeholder="Geben Sie Ihre Vorname ein" variant="outlined" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} sm={6}item>
                <TextField type="nachname" label="Nachname" placeholder="Geben Sie Ihre Vorname ein"variant="outlined" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
                <TextField type="email" label="Email" placeholder="Geben Sie Ihre Email ein"variant="outlined" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
                <TextField type="number" label="Telefon" placeholder="Geben Sie Ihre Telefon ein"variant="outlined" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
                <TextField label="Nachricht" multiline rows={2}placeholder="Schreiben Sie Ihre Nachricht"variant="outlined" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
            </Grid>
            </form>
          </CardContent>
          </Card>
        </div>
    
  );
}

export default Formcontact;