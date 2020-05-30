import React from 'react';
import ReactDOM from 'react-dom';
//import Cardcon from './container/card-container';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './action/index.js'
import './index.css';
import NavAppBar from './component/snavbar.js'
import Container from '@material-ui/core/Container';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import ReadingListContainer from './container/readinglist';
import rootreducer from './reducers/rootreducer';
import Footer from './component/footer';

let store = createStore(rootreducer, 
  composeWithDevTools(applyMiddleware(logger, thunk)))

function App () {
    return (
      <div>
        <NavAppBar />
        <Container fixed>
            <ReadingListContainer/>
        </Container>
        <Footer/>
      </div>
    );
}


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
