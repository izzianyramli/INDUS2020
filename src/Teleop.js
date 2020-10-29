import { React, Component } from 'react';
import { withStyles, Typography, Grid, Paper, CssBaseline, CardActions, Slider, Button } from '@material-ui/core';
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward, FastForwardRounded, FastRewindRounded, Stop, PlayArrow } from '@material-ui/icons';
import teleop from './image/teleop-icon.ico';
import Title from './Title';
import axios from 'axios';

const styles = theme => ({
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
        align: 'center',
    },
    title: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
});

function valuetext(value) {
    return `${value}`;
};

class Teleop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClick: false,
            value: 0.1,
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonClose = this.handleButtonClose.bind(this);
        this.handleInitTeleop = this.handleInitTeleop.bind(this);
        this.handlestopTeleop = this.handlestopTeleop.bind(this);
        this.handledown = this.handledown.bind(this);
        this.handleup = this.handleup.bind(this);
        this.handleright = this.handleright.bind(this);
        this.handleleft = this.handleleft.bind(this);
        this.handleChangeSlider = this.handleChangeSlider.bind(this);
        this.handleUpSpeed = this.handleUpSpeed.bind(this);
        this.handleDownSpeed = this.handleDownSpeed.bind(this);
    };

    handleButtonClick = () => {
        console.log('Teleop activated');
        this.setState({ buttonClick: true });
        this.handleInitTeleop();
    };

    handleButtonClose = () => {
        console.log("Teleop stopped");
        this.setState({ buttonClick: false });
        this.handlestopTeleop();
    };

    handleInitTeleop() {
        const teleop = {
            robotname: 'robot1',
            speed: this.state.value,
        };
        console.log(teleop);
        axios.post(`/teleop/initTeleop`, teleop)
            .then(res => {
                console.log('Initiating Teleop', res);
            })
            .catch(err => {
                console.log(`Error: `, err);
            });
    };

    handlestopTeleop() {
        const teleop = {
            robotname: 'robot1',
        };
        console.log(teleop);
        axios.post(`/teleop/stopTeleop`, teleop)
            .then(res => {
                console.log('Stopping Teleop', res);
            })
            .catch(err => {
                console.log(`Error: `, err);
            });
    };

    handledown() {
        const teleop = {
            robotname: 'robot1',
            speed: this.state.value,
        };
        console.log(teleop);
        axios.post(`/teleop/down`, teleop)
            .then(res => {
                console.log("Down pressed", res);
            })
            .catch(err => {
                console.log(`Error: `, err);
            });
    };

    handleup() {
        const teleop = {
            robotname: 'robot1',
            speed: this.state.value,
        };
        console.log(teleop);
        axios.post(`/teleop/up`, teleop)
            .then(res => {
                console.log("Up pressed", res);
            })
            .catch(err => {
                console.log(`Error: `, err);
            });
    };

    handleright() {
        const teleop = {
            robotname: 'robot1',
            speed: this.state.value,
        };
        console.log(teleop);
        axios.post(`/teleop/right`, teleop)
            .then(res => {
                console.log("Right pressed", res);
            })
            .catch(err => {
                console.log(`Error: `, err);
            });
    };

    handleleft = () => {
        const teleop = {
            robotname: 'robot1',
            speed: this.state.value,
        };
        console.log(teleop);
        axios.post(`/teleop/left`, teleop)
            .then(res => {
                console.log("Left pressed", res);
            })
            .catch(err => {
                console.log(`Error: `, err);
            });
    };

    handleChangeSlider = (event, newValue) => {
        this.setState({ value: newValue });
        console.log('Speed changed to: ', newValue);
    };

    handleUpSpeed = () => {
        console.log("Increasing speed: ", this.state.value + 0.1);
        this.setState({ value: (this.state.value + 0.1) });
    };

    handleDownSpeed = () => {
        console.log("Decreasing speed: ", this.state.value - 0.1);
        this.setState({ value: (this.state.value - 0.1) });
    }


    render() {
        const classes = this.props;
        const marks = [
            {
                value: 0,
                label: '0',
            },
            {
                value: 0.1,
                label: '0.1',
            },
            {
                value: 0.5,
                label: '0.5',
            },
            {
                value: 1,
                label: '1',
            },
        ];

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>
                            <div style={{ float: 'left' }}>
                                <br />
                                <Title> &nbsp;
                                    <img className={classes.button} src={teleop} width="28" alt="teleop-control" align="center" />
                                    &nbsp; Teleop Control
                                </Title>
                                <br />
                                <CardActions align='center'>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        onClick={this.handleButtonClick}
                                    >
                                        <PlayArrow />
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.button}
                                        onClick={this.handleButtonClose}
                                    >
                                        <Stop />
                                    </Button>
                                </CardActions>
                            </div>
                            {this.state.buttonClick &&
                                <div>
                                    <Grid container className={classes.root}>
                                        <Grid item xs>
                                            <Grid container justify="center">
                                                <Button
                                                    variant="outlined"
                                                    color="default"
                                                    className={classes.button}
                                                    onClick={this.handleup}
                                                >
                                                    <ArrowUpward />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container className={classes.root}>
                                        <Grid item xs={12}>
                                            <Grid container justify="center">
                                                <Button
                                                    variant="outlined"
                                                    color="default"
                                                    className={classes.button}
                                                    onClick={this.handleleft}
                                                >
                                                    <ArrowBack />
                                                </Button>

                                                <Button
                                                    variant="outlined"
                                                    color="default"
                                                    className={classes.button}
                                                    onClick={this.handledown}
                                                >
                                                    <ArrowDownward />
                                                </Button>

                                                <Button
                                                    variant="outlined"
                                                    color="default"
                                                    className={classes.button}
                                                    onClick={this.handleright}
                                                >
                                                    <ArrowForward />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Typography className={classes.title} align='center' component='h5' variant='h6'>
                                        <br /><b>&nbsp;SPEED</b><br />
                                    </Typography>
                                    <br />
                                    <Grid container justify='center' spacing={1}>
                                        <Grid item xs={3}>
                                            &nbsp;
                                                <Button
                                                variant="outlined"
                                                color="default"
                                                className={classes.button}
                                                onClick={this.handleDownSpeed}
                                            >
                                                <FastRewindRounded />
                                            </Button>
                                            &nbsp;
                                        </Grid>
                                        <Grid item xs={3}>
                                            &nbsp;
                                                <Slider
                                                value={this.state.value}
                                                onChange={this.handleChangeSlider}
                                                aria-labelledby="continuous-slider"
                                                step={0.1}
                                                getAriaValueText={valuetext}
                                                marks={marks}
                                                scalelength={0.5}
                                                max={1}
                                                valueLabelDisplay="auto"
                                                className={classes.button}
                                                color="secondary"
                                            />
                                            &nbsp;
                                        </Grid>
                                        <Grid item xs={3}>
                                            &nbsp;
                                                <Button
                                                variant="outlined"
                                                color="default"
                                                className={classes.button}
                                                onClick={this.handleUpSpeed}
                                            >
                                                <FastForwardRounded />
                                            </Button>
                                                &nbsp;
                                        </Grid>
                                    </Grid>
                                </div>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default withStyles(styles, { withTheme: true })(Teleop);
