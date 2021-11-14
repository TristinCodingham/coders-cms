import React from 'react';

import { Routes, Route } from 'react-router-dom';

import GithubContentsAPI from './api/contents/GithubContentsAPI';
import Admin from './ui/components/pages/private/Admin';

function App() {
  //document.title = ""; // Defined by user
  //document.head.appendChild(""); // Add meta's
  return (
    <React.Fragment>
      <GithubContentsAPI />
    </React.Fragment>
  );
}

export default App;
