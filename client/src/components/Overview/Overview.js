import React from 'react';
import './Overview.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Overview = () => {

    return (

        <div className="overview_container">
            <h2 className="h2_overview">Alle Städte im Überblick</h2>
                <Card className="leipzig_card">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Leipzig
                        </Typography>
                    </CardContent>
                </Card>

            <Card className="berlin_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Berlin
                    </Typography>
                </CardContent>
            </Card>
            <Card className="konstanz_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Konstanz
                    </Typography>
                </CardContent>
            </Card>
            <Card className="suttgart_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Suttgart
                    </Typography>
                </CardContent>
            </Card>
            <Card className="hamburg_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Hamburg
                    </Typography>
                </CardContent>
            </Card>
            <Card className="erfurt_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Erfurt
                    </Typography>
                </CardContent>
            </Card>
            <Card className="düsseldorf_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Düsseldorf
                    </Typography>
                </CardContent>
            </Card>
            <Card className="köln_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Köln
                    </Typography>
                </CardContent>
            </Card>
            <Card className="rügen_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Rügen
                    </Typography>
                </CardContent>
            </Card>
            <Card className="münchen_card">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        München
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )

}
export default Overview;