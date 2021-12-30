import React from 'react';

import GithubContentsAPI from '../../api/contents/GithubContentsAPI';

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
