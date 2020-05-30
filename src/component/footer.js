import React, { Component } from 'react';
import { Container } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <p>News API by: <a class="color-inherit no-underline" href="https://github.com/News-API-gh" rel="noopener noreferrer" target="_blank">NewsAPI v2</a></p>
                    <a class="color-inherit no-underline" href="https://github.com/News-API-gh" rel="noopener noreferrer" target="_blank"><GitHubIcon style={{ fontSize: 18 }} color="action" /> Github</a>
                </Container>
            </div>
        );
    }
}

export default Footer;