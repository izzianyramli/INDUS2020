import { React } from 'react';
import { makeStyles, Link, Container, Box, CssBaseline, Typography } from '@material-ui/core';
import ImageStream from './ImageStream';
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
}));


export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <CssBaseline />
                    <ImageStream />
                <CssBaseline />
                <Teleop />
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
};