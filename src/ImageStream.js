import { React, Component } from 'react';
import { CssBaseline, Grid, withStyles, Card} from '@material-ui/core';
import Title from './Title';
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
                                <div align="center">
                                     <img src="http://10.226.222.134:8000/"  width="1280" height="480" alt="ImageStream" />
                                </div>
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