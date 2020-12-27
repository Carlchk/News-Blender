import React, { useEffect, useState } from 'react';
// tools
import lodash from 'lodash';

// ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    githubIcon: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Navbar = () => {
    const classes = useStyles();
    const [weather, setWeather] = useState([])

    useEffect(() => {
        let tempWeatherArray
        fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc')
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setWeather(parseInt(lodash.mean(result.temperature.data.map(x => x.value))))
            })
        setWeather(lodash.mean(tempWeatherArray))
    }, [])


    return (
        <div className={classes.root}>
            <AppBar style={{ background: 'linear-gradient(45deg, #006bc2 30%, #0a61a9 90%)' }} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>  Newsblender </Typography>
                    <Typography variant="h6" > {weather} °C </Typography>
                    <IconButton edge="start" className={classes.githubIcon} color="inherit" aria-label="menu" onClick={() => window.open('https://github.com/Carlchk/News-Blender')}>
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar; 