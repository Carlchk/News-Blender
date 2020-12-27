import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const newsapiTOKEN = 'ca1da6130ee140478f2931254cb5321a';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 20,
    margin: 10
  },

  CardGrid:{

  }
});

const NewsList = () => {
  const [region, setRegion] = useState('hk')
  const [newsResult, setNewsReult] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const classes = useStyles();

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${region}&apiKey=${newsapiTOKEN}`)
      .then(res => {
        return res.json();
      }).then(result => {
        setNewsReult(result.articles)
        setIsLoading(false)
      }).catch((err) => {
        setNewsReult('error')
      });
  }, [region]);

  return (
    <>
    {isLoading?
    <Typography>Loading</Typography>
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
  );
}

export default NewsList; 