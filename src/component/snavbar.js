import React from "react";
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => {
    return {
        searchKeyword: state.searchKeyword
    };
};

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.searchArticlebyKeyword = this.searchArticlebyKeyword.bind(this);
    }

    searchArticlebyKeyword(e) {
        this.props.searchStringChange(e.target.value);
        this.props.searchArticle(e.target.value);
    }

    render() {
        return (
            <AppBar className="header" position="fixed">
                <Toolbar>
                    <Typography variant="h6">US HEADLINES</Typography>
                    </Toolbar>

            </AppBar>
        );
    }
}
export default connect(
    mapStateToProps,
)(SearchHeader);