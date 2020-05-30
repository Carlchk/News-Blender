import { actionTypes } from '../reducers/index';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ca1da6130ee140478f2931254cb5321a');

export const getNews = (pageIndex) => {
    return (dispatch) => {
        dispatch(GettingNews())
        newsapi.v2.topHeadlines({
            country: "us"
        }).then(response => {
            console.log(response);
            const Fetchedarticles = response.articles
            dispatch(GotNews(Fetchedarticles))
        });
    }
}

export const GettingNews = () => {
    return {
        type: actionTypes.NEWS_LIST_HEADLINES_REQUEST,
    }
}
export const GotNews = response => {
    return {
        type: actionTypes.NEWS_LIST_HEADLINES_SUCCESS,
        result: response
    }
}