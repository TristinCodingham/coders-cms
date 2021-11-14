import React from 'react';
import GithubContentsAPI from './api/contents/GithubContentsAPI';

function App() {
  //document.title = ""; // Defined by user
  //document.head.appendChild(""); // Add meta's
  return (
    <React.Fragment>
      {/* The website built with coders-cms. Should be pulled from an API */}
      <GithubContentsAPI />
    </React.Fragment>
  );
}

export default App;
