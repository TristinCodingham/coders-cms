import React from 'react';

import axios from 'axios';

/*
/repos/:owner/:name/git/
/repos/:owner/:name/contents/
/repos/:owner/:name/pulls/
/repos/:owner/:name/branches/
/repos/:owner/:name/compare/
/repos/:owner/:name/commits/
/repos/:owner/:name/issues/<number>/labels
*/

axios.get("/.netlify/git/github/contents/", {
    "headers": {
        "access-token": "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"
    }
})
    .then(res => console.log(res));
export default function GithubContentsAPI() {
    return (
        <div>
            
        </div>
    )
}
