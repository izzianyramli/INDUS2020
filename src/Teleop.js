import { Component, React } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CssBaseline, CardActions, Slider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward, FastForwardRounded, FastRewindRounded } from '@material-ui/icons';
import teleop from './image/teleop-icon.ico';

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
        }
    };

    handleButtonClick = () => {
        console.log('Teleop activated');
        this.setState({ buttonClick: true });
    };

    handleButtonClose = () => {
        console.log("Teleop stopped");
        this.setState({ buttonClick: false });
    };

    handledown = () => {
        console.log("Down pressed");
    };

    handleup = () => {
        console.log("Up pressed");
    };

    handleright = () => {
        console.log("Right pressed");
    };

    handleleft = () => {
        console.log("Left pressed");
    };

    handleChangeSlider = (event, newValue) => {
        this.setState({ value: newValue });
        console.log('Speed changed to: ', newValue);
    };

    handleUpSpeed = () => {
        // this.setState({value: this.state.value + 0.1});
        console.log("Increasing speed: ", this.state.value + 0.1);
        this.setState({value: (this.state.value + 0.1)});
    };

    handleDownSpeed = () => {
        // this.setState({value: this.state.value - 0.1});
        console.log("Decreasing speed: ", this.state.value - 0.1);
        this.setState({value: (this.state.value - 0.1)});
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
                    <Typography component="h2" variant="h6" color="primary" gutterBottom={false} align="center">
                        <img className={classes.button} src={teleop} width="28" alt="teleop-control" align="center" />
                        Teleop Control
                    </Typography>
                    <Grid item xs={12}>
                        <Paper>
                            <div style={{ float: 'center' }}>
                                <CardActions align='center'>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        onClick={this.handleButtonClick}
                                    >
                                        <PlayArrowIcon />
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.button}
                                        onClick={this.handleButtonClose}
                                    >
                                        <StopIcon />
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
                                    <Typography className={classes.title} align='left'>
                                        <b>&nbsp;SPEED</b>
                                    </Typography>
                                    <Grid container justify='center'>
                                        <Grid item>
                                            <Button
                                                variant="outlined"
                                                color="default"
                                                className={classes.button}
                                                onClick={this.handleDownSpeed}
                                            >
                                                <FastRewindRounded />
                                            </Button>
                                        </Grid>
                                        <Grid item xs>
                                            <Slider
                                                value={this.state.value}
                                                onChange={this.handleChangeSlider}
                                                aria-labelledby="continuous-slider"
                                                step={0.1}
                                                getAriaValueText={valuetext}
                                                marks={marks}
                                                scaleLength={0.5}
                                                max={1}
                                                valueLabelDisplay="auto"
                                                className={classes.button}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="outlined"
                                                color="default"
                                                className={classes.button}
                                                onClick={this.handleUpSpeed}
                                            >
                                                <FastForwardRounded />
                                            </Button>
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
