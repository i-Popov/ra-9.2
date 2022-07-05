/* eslint-disable eqeqeq */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/posts/new" element={<CreatePost/>} />
          <Route path="/posts/:id" element={<ViewPost/>} />
          <Route exact path="/" element={<AllPosts/>} />
        </Routes>
      </Router>
    </React.Fragment>   
  );
}

export default App;