import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../action/index'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Typography } from "@material-ui/core";
import { Container, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 512,
    padding: 24,
  },

});

function ReadingListContainer({ articleData, getHeadlines }) {
  const classes = useStyles();

  useEffect(() => {
    console.log(articleData)
    getHeadlines()
  }, [])
  return articleData.loading ? (
    <Container>
      <div>
        <CircularProgress />
        <h2>Fetching News. Please wait a second.</h2>
      </div>
    </Container>

  ) : (
      <div>
        <div style={{ marginTop: 20, padding: 30 }}>
          <Grid container justify="center">
            {articleData.newslist.map(articles =>
              <Card className={classes.root}>
                <CardActionArea href={articles.url} target="_blank" rel="noopener noreferrer"> {/* security option of preventing Phishing */}
                  <CardMedia
                    component="img"
                    alt="Image Not Found "
                    image={articles.urlToImage}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">{articles.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {articles.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


            )}</Grid>
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    articleData: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHeadlines: () => dispatch(getNews())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingListContainer)
