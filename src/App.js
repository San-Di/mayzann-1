import React, { Component } from 'react';
import Login from './containers/login';
import Posts from './containers/Posts';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import PostDetail from "./containers/PostDetail";
import TestComponent from "./containers/TestComponent";
import fetchableContainer from "./containers/FetchableContainer";
import UploadPost from './components/UploadPost';
import AddPost from './containers/AddPost';
import { connect } from 'tls';
import {addState} from './actions/index';

const store = createStore(
    rootReducer
  );

  const PostList = fetchableContainer({
    url: 'http://192.178.1.7/posts'
})(Posts);
export class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
        <Switch>
          <Route exact path = "/" render = {() => (<Login/>)} />
          {/* <Route exact path = "/posts/:id" render ={(props)=> (<PostDetail {...props}/>)}/> */}
          <Route exact path = "/posts/:id" component = {PostDetail} />
          <Route path = "/posts" render = {() => (<PostList/>)} />
          <Route path = "/upload" render = {() => (<AddPost/>)} />
        </Switch>
        </Router>
        </Provider>
      </div>

    );
  }
}

const BarNyar = (props) => {
  
  return (
    <div>
      Blah Blah {console.log(props.location.search)}
      </div>
  )

}




