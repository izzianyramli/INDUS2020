import { React, Component } from 'react';
import { CssBaseline, Grid, withStyles, Card, CardMedia, Button } from '@material-ui/core';
import Title from './Title';
import thermalImage from './image/thermal-image.jpg';
import camera from './image/camera-icon.ico';
import Webcam from 'react-webcam';

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
    constructor(props) {
        super(props);
        this.state = {
            startStream: false
        };
        this.setRef = this.setRef.bind(this);
        this.handleStartStreaming = this.handleStartStreaming.bind(this);
        this.stop = this.stop.bind(this);
    };

    setRef = (webcam) => {
        this.webcam = webcam;
    };

    handleStartStreaming = () => {
        this.setState({ startStream: true });
    };

    stop = () => {
        let stream = this.webcam.video.srcObject;
        const tracks = stream.getTracks();
        this.setState({ startStream: false });

        tracks.forEach(track => track.stop());
        this.webcam.video.srcObject = null;
    };

    render() {
        const classes = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card align="left" className={classes.card}>
                            <div style={{ float: 'inline-start' }}>
                                <br />
                                <Title> &nbsp;
                                    <img className={classes.button} src={camera} width="28" alt="camera" align="center" />
                                    &nbsp; Image Stream
                                </Title>
                                <br /> &nbsp;&nbsp;
                                {this.state.startStream && <div align="center">
                                    <Webcam audio={false} ref={this.setRef} />
                                </div>
                                }
                                <br /> <br /> &nbsp;&nbsp;
                                <Button variant="outlined" className={classes.button} onClick={this.handleStartStreaming}>Start streaming</Button>
                                 &nbsp;&nbsp;
                                <Button variant="outlined" className={classes.button} onClick={this.stop}>Stop streaming</Button>
                                {/* <CardMedia
                                    component="img"
                                    alt="thermal-scanner"
                                    image={thermalImage}
                                    title="Thermal Scanner"
                                /> */}
                                <br /> <br />
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    };
};

export default withStyles(styles, { withTheme: true })(ImageStream);