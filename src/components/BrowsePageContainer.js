import React, { useState, useEffect } from 'react';

// ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        padding: 20,
        margin: 10
    },
    searchroot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const newsapiTOKEN = 'ca1da6130ee140478f2931254cb5321a';


const BrowsePageContainer = () => {
    const classes = useStyles();
    const [inputText, setInputText] = useState('')
    const [newsResult, setNewsReult] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (inputText.length !== 0) {
            fetch(`https://newsapi.org/v2/everything?q=${inputText}&apiKey=${newsapiTOKEN}`)
                .then(res => {
                    return res.json();
                }).then(result => {
                    setNewsReult(result.articles)
                    setIsLoading(false)
                }).catch((err) => {
                    setNewsReult('error')
                });
        }

    }, [inputText]);

    return (
        <>
            <Paper component="form" className={classes.searchroot}>
                <SearchIcon />
                <InputBase
                    className={classes.input}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'Search...' }}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </Paper>
            <Container fixed>
                <>
                    {isLoading ?
                        <></>
                        :
                        <>
                            <Grid container justify="center">
                                
                                {newsResult.map((news) =>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={news.urlToImage}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {news.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {news.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={() => { window.open(news.url); }}>
                                                Learn More
                   </Button>
                                        </CardActions>
                                    </Card>
                                )}
                            </Grid></>
                    }
                </>
            </ Container>
        </>
    );
}

export default BrowsePageContainer; 