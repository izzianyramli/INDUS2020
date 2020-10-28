import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link, Container, Box } from '@material-ui/core';
import thermal from './image/thermal-icon.ico';

import thermalImage from './image/thermal-image.jpg';

import Teleop from './Teleop';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" >
            { 'Copyright © '}
            < Link color="inherit" href="https://material-ui.com/" >
                PatBot: An Intelligent Patrol Robot Solution Towards Mid-Pandemic in a SMART City
        </Link> { ' '}
            { new Date().getFullYear()}
            { '.'}
        </Typography >
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    button: {
        margin: theme.spacing(1),
    },
    image: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
}));


export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={3}>

                    <br />
                    <Grid item xs={12} md={12} sm={12}>
                        <Typography component="h2" variant="h6" color="primary">
                            <img className={classes.button} src={thermal} width="28" alt="thermal-scanner" />
                            Thermal Scanner
                        </Typography>
                        <Paper>
                            <img className={classes.image} alt="thermal" src={thermalImage} />
                        </Paper>
                    </Grid>
                </Grid>

                <br />
                <Teleop />
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
};