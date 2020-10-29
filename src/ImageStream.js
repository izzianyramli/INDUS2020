import { React, Component } from 'react';
import { CssBaseline, Grid, withStyles, Card, CardMedia } from '@material-ui/core';
import Title from './Title';
import thermalImage from './image/thermal-image.jpg';
import camera from './image/camera-icon.ico';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    button: {
        margin: theme.spacing(1),
        align: 'center',
    },
    image: {
        margin: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: 'block',
        maxWidth: '50%',
        maxHeight: '50%'
    },
    card: {
        margin: theme.spacing(1),
    },
});


class ImageStream extends Component {
    render() {
        const classes = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card align="left" className={classes.card}>
                            <div style={{ float: 'center' }}>
                                <br />
                                <Title> &nbsp;
                                    <img className={classes.button} src={camera} width="28" alt="camera" align="center" />
                                    &nbsp; Image Stream
                                </Title>
                                <br />
                                <CardMedia
                                    component="img"
                                    alt="thermal-scanner"
                                    image={thermalImage}
                                    title="Thermal Scanner"
                                />
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    };
};

export default withStyles(styles, { withTheme: true })(ImageStream);